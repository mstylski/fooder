import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


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

  constructor(public authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe(() => {
      this.router.navigate(['/dashboard/recipes']);
    });
  }
}


