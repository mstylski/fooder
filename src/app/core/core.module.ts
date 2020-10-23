import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeFormModalComponent } from '../recipes/recipe-form-modal/recipe-form-modal.component';



@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HeaderComponent, RecipeFormModalComponent],
  exports: [
    RecipeFormModalComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule {
}
