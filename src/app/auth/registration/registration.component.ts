import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  firstNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(public authService: AuthService, private router: Router) {
  }

  register() {
    this.authService.register(
      this.emailFormControl.value,
      this.passwordFormControl.value,
      this.firstNameFormControl.value,
      this.lastNameFormControl.value)
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
     });
  }
}
