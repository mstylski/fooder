import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CooksPage, UpdateProfileHttpPayload } from '../shared/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {
  }

  editUserData(payload: UpdateProfileHttpPayload): Observable<UpdateProfileHttpPayload> {
    return this.http.patch<UpdateProfileHttpPayload>(`${ environment.apiUrl }/auth/update_profile`, payload);
  }

  getCooks(page, limit, city): Observable<CooksPage> {
    const params = { page, limit, city };
    return this.http.get<CooksPage>(`${ environment.apiUrl}/cooks`, { params });
  }
}
