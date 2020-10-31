import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User, UserResponse } from '../shared/models/user.model';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { isAfter } from 'date-fns';
import { environment } from '../../environments/environment';
const tokenKey = 'FOODER_TOKEN_KEY';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  login(email: string, password: string) {
    return this.http.post<UserResponse>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((userResponse) => {
          this.user$.next(userResponse.user);
          window.localStorage.setItem(tokenKey, userResponse.token);
          return userResponse;
        }),
      );
  }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post<UserResponse>(`${environment.apiUrl}/auth/register`, { email, password, firstName, lastName })
      .pipe(
        map((userResponse) => {
          this.user$.next(userResponse.user);
          window.localStorage.setItem(tokenKey, userResponse.token);
          return userResponse;
        }),
      );
  }

  getTokenFromLocalstorage() {
    return window.localStorage.getItem(tokenKey);
  }

  isLoggedIn() {
    const jwtToken = this.getTokenFromLocalstorage();

    if (!jwtToken) {
      return false;
    }

    const decoded = jwt_decode(jwtToken) as { exp: number };
    console.log('decoded', decoded);
    const isExpired = isAfter(new Date(), new Date(decoded.exp * 1000));

    return !isExpired;
  }

  logout() {
    this.router.navigate(['/login']).then(() => {
      window.localStorage.removeItem(tokenKey);
      this.user$.next(null);
    });
  }

  pushUser() {
    this.user$.next(this.getUserFromDecodedToken());
  }

  private getUserFromDecodedToken(): User | null {
    const token = this.getTokenFromLocalstorage();
    if (token) {
      return jwt_decode(token).user;
    }
    return null;
  }

}
