import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  readonly user$ = this.authService.user$;

  constructor(
    private readonly authService: AuthService) {
  }

  toggle() {
    this.sidenav.toggle();
  }

  logout() {
    this.authService.logout();
  }

  close() {
    if (this.sidenav.opened) {
      this.sidenav.toggle();
    }
  }
}
