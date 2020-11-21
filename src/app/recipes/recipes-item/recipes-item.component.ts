import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  @Output() deleted = new EventEmitter<Recipe>();
  @Output() edited = new EventEmitter<Recipe>();

  deleteRecipe() {
    this.deleted.emit(this.recipe);
  }

  editRecipe() {
    this.edited.emit(this.recipe);
  }
}



