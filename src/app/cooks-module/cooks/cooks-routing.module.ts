import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooksComponent } from './cooks.component';

const routes: Routes = [{ path: '', component: CooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CooksRoutingModule {}
