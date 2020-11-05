import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CooksComponent } from './cooks/cooks.component';
import { SharedModule } from '../shared/shared.module';
import { CooksRoutingModule } from './cooks/cooks-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [CooksComponent],
  imports: [
    CommonModule,
    SharedModule,
    CooksRoutingModule,
    CoreModule,
  ]
})
export class CooksModule { }
