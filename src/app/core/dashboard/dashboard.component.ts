import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeFormModalComponent } from '../../recipes/recipe-form-modal/recipe-form-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {



  constructor(public dialog: MatDialog) {
  }


  openDialog() {
    this.dialog.open(RecipeFormModalComponent, {
      width: '700px',
    });
  }
}
