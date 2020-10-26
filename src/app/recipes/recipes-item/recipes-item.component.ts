import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeResponse } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {

  @Input() recipe: RecipeResponse;
  @Output() deleted = new EventEmitter<RecipeResponse>();

  public deleteRecipe() {
    this.deleted.emit(this.recipe);
  }
}


