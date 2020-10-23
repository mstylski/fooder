import { Component, Input, OnInit } from '@angular/core';
import { RecipeResponse } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
@Input()  recipe: RecipeResponse;

}
