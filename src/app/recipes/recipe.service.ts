import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeHttpPayload, RecipeResponse } from '../shared/models/recipe.model';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  addRecipe(payload: RecipeHttpPayload): Observable<RecipeResponse> {
    return this.http.post<RecipeResponse>('https://api.efooder.pl/recipes', payload);
  }

  getRecipes(): Observable<RecipeResponse[]> {
    return this.http.get<RecipeResponse[]>('https://api.efooder.pl/recipes');
  }

  deleteRecipe(id: string): Observable<RecipeResponse[]> {
    return this.http.delete<RecipeResponse[]>(`https://api.efooder.pl/recipes/${ id }`);
  }

  getRecipe(id: string): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`https://api.efooder.pl/recipes/${ id }`);
  }
}
