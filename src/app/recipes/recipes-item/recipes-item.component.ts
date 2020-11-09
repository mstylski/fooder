import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeResponse } from '../../shared/models/recipe.model';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  @Input() recipe: RecipeResponse;
  @Output() deleted = new EventEmitter<RecipeResponse>();
  @Output() edited = new EventEmitter<RecipeResponse>();
  numberOfLikes = 0;


  constructor() {
  }

  public deleteRecipe() {
    this.deleted.emit(this.recipe);
  }

  public editRecipe() {
    this.edited.emit(this.recipe);
  }

  likeButton() {
    this.numberOfLikes++;
  }
}



