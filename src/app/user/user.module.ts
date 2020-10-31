import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { QuillModule } from 'ngx-quill';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [UserComponent, UserAvatarComponent, UserFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    QuillModule
  ]
})
export class UserModule { }
