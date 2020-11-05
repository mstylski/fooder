import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HeaderComponent],
  exports: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule {
}
