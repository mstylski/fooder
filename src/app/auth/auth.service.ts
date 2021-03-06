import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User, UserLoginResponse } from '../shared/models/user.model';
import { filter, map } from 'rxjs/operators';
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
    return this.http.post<UserLoginResponse>(`${ environment.apiUrl }/auth/login`, { email, password })
      .pipe(
        map((userResponse) => {
          this.user$.next(userResponse.user);
          window.localStorage.setItem(tokenKey, userResponse.token);
          return userResponse;
        }),
      );
  }

  register(email: string, password: string, firstName: string, lastName: string) {
    return this.http.post<UserLoginResponse>(`${ environment.apiUrl }/auth/register`, { email, password, firstName, lastName })
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

    this.getMe()
      .pipe(filter(Boolean))
      .subscribe(user => {
        this.user$.next(user as User);
      });
  }

  getMe() {
    return this.http.get<User>(`${ environment.apiUrl }/auth/me`);
  }

  deleteAvatar() {
    return this.http.delete<User>(`${ environment.apiUrl }/file-upload/avatars`);
  }
}
