import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeHttpPayload, RecipeResponse } from '../shared/models/recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private http: HttpClient) {
  }

  addRecipe(payload: RecipeHttpPayload): Observable<RecipeResponse> {
    return this.http.post<RecipeResponse>(`${environment.apiUrl}/recipes`, payload);
  }

  getRecipes(): Observable<RecipeResponse[]> {
    return this.http.get<RecipeResponse[]>(`${environment.apiUrl}/recipes`);
  }

  deleteRecipe(id: string): Observable<RecipeResponse[]> {
    return this.http.delete<RecipeResponse[]>(`${environment.apiUrl}/recipes/${ id }`);
  }

  getRecipe(id: string): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${environment.apiUrl}/recipes/${ id }`);
  }

  editRecipe(payload: RecipeHttpPayload, id: string): Observable<RecipeResponse> {
    return this.http.patch<RecipeResponse>(`${environment.apiUrl}/recipes/${ id }`, payload);
  }

}
