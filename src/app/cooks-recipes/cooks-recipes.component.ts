import { Component, Inject, OnInit, Optional } from '@angular/core';
import { User } from '../shared/models/user.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cooks-recipes',
  templateUrl: './cooks-recipes.component.html',
  styleUrls: ['./cooks-recipes.component.scss']
})
export class CooksRecipesComponent implements OnInit {
  user: User;


  constructor(@Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: User,
              private router: Router,
              private bottomSheet: MatBottomSheetRef<CooksRecipesComponent>) {
    this.user = data;
  }

  ngOnInit(): void {
  }


  navigate(id: string)  {
    this.bottomSheet.dismiss();
    this.router.navigate([`/dashboard/recipes/${id}`]);
  }
}
