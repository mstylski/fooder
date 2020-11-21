import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeHttpPayload, Recipe } from '../shared/models/recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  addRecipe(payload: RecipeHttpPayload): Observable<Recipe> {
    return this.http.post<Recipe>(`${ environment.apiUrl }/recipes`, payload);
  }

  deleteRecipe(id: string): Observable<Recipe[]> {
    return this.http.delete<Recipe[]>(`${ environment.apiUrl }/recipes/${ id }`);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${ environment.apiUrl }/recipes`);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${ environment.apiUrl }/recipes/${ id }`);
  }

  editRecipe(payload: RecipeHttpPayload, id: string): Observable<Recipe> {
    return this.http.patch<Recipe>(`${ environment.apiUrl }/recipes/${ id }`, payload);
  }
}
