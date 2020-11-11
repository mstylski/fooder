import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooksComponent } from './cooks/cooks.component';
import { SharedModule } from '../shared/shared.module';
import { CooksRoutingModule } from './cooks/cooks-routing.module';
import { CooksRecipesComponent } from '../cooks-recipes/cooks-recipes.component';


@NgModule({
  declarations: [CooksComponent, CooksRecipesComponent],
  entryComponents: [CooksRecipesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CooksRoutingModule,
  ]
})
export class CooksModule { }
