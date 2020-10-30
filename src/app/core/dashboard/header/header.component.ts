import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  @Input() user: User;
  @Output() menuToggled = new EventEmitter<void>();


  constructor() {
  }
}




