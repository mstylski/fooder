import { Component } from '@angular/core';
import { UserService } from './user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';
import { UserFormValue } from './user-form/user-form.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent {
  readonly user$ = this.authService.user$;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private authService: AuthService) {
  }

  saveChanges(userFormValue: UserFormValue) {
    this.userService.editUserData(userFormValue).subscribe(() => {
      this.authService.pushUser();
      this.snackBar.open('User data has been updated successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
    }
  }


