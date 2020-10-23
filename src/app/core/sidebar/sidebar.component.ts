import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  // readonly navLinks: NavLink[] = [
  //   { label: 'Cennik',  path: '/dodaj-oferte', icon: 'bar_chart' },
  //   { label: 'Polityka prywatności',  path: '/polityka-prywatnosci', icon: 'assignment' },
  //   { label: 'Regulamin',  path: '/regulamin', icon: 'assignment' },
  // ];
  readonly user$ = this.authService.user$;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

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
