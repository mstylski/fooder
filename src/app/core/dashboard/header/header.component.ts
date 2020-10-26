import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/models/user.model';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;
  @Output() menuToggled = new EventEmitter<void>();


  constructor() {
  }
}




