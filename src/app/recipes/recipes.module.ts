import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipeFormModalComponent } from './recipe-form-modal/recipe-form-modal.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [RecipesComponent, RecipesItemComponent, RecipeFormModalComponent, RecipeDetailsComponent],
  imports: [
    SharedModule,
    QuillModule.forRoot({
      format: 'html',
      placeholder: '',
      modules: {
        toolbar: {
          container: [
            ['bold', 'italic'],
            [{list: 'bullet'}],
            [{align: ['', 'right', 'center']}],
          ],
        },
      }
    }),
  ],
})

export class RecipesModule {}
