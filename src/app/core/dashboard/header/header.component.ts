import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly user$ = this.authService.user$;
  @Output() menuToggled = new EventEmitter<void>();

  constructor(private authService: AuthService) {
  }
}




