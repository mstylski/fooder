import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';


@NgModule({
  declarations: [RecipesComponent, RecipesItemComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule,
    CoreModule
  ]
})
export class RecipesModule {
}
