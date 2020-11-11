import { Component, Inject, OnInit, Optional } from '@angular/core';
import { User } from '../shared/models/user.model';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cooks-recipes',
  templateUrl: './cooks-recipes.component.html',
  styleUrls: ['./cooks-recipes.component.scss']
})
export class CooksRecipesComponent implements OnInit {
  user: User;


  constructor(@Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: User) {
    this.user = data;
  }

  ngOnInit(): void {
  }

}
