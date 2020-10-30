import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserFormModalComponent } from './user-avatar/user-form-modal/user-form-modal.component';



@NgModule({
  declarations: [UserComponent, UserAvatarComponent, UserFormModalComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
