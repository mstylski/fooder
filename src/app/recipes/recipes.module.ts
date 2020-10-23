import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipeFormModalComponent } from './recipe-form-modal/recipe-form-modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RecipesComponent, RecipesItemComponent, RecipeFormModalComponent],
  imports: [
    SharedModule
  ]
})
export class RecipesModule {
}
