import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RecipeResponse } from '../shared/models/recipe.model';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecipeResolveService implements Resolve<RecipeResponse> {

  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<RecipeResponse> {
    return this.recipeService.getRecipe(route.params.id);
  }

}
