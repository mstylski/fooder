import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeResponse } from '../../shared/models/recipe.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {

  @Input() recipe: RecipeResponse;
  @Output() deleted = new EventEmitter<RecipeResponse>();

  constructor(private authService: AuthService,
              private router: Router) {
  }

  public deleteRecipe() {
    this.deleted.emit(this.recipe);
  }

  showDetails() {
    this.router.navigate(['dashboard/recipes/{id}']);
    return false;
  }
}



