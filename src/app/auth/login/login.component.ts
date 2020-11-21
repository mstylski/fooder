import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private authService: AuthService, private router: Router, private notificationService: NotificationService) {
  }

  login() {
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe(() => {
      this.router.navigate(['/dashboard/recipes']);
    }, error => this.notificationService.error('Invalid password or login'));
  }
}


