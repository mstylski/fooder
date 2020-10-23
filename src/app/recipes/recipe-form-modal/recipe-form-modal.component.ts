import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Kind } from '../../shared/models/recipe.model';


@Component({
  selector: 'app-recipe-form-modal',
  templateUrl: './recipe-form-modal.component.html',
  styleUrls: ['./recipe-form-modal.component.scss']
})

export class RecipeFormModalComponent implements OnInit {
  modelForm: FormGroup;
  readonly kind = Kind;

  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipeService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RecipeFormModalComponent>){

  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      title: '',
      kind: this.kind.MAIN,
      formula: '',
      isVegan: false,
    });
  }

  addRecipe() {
    this.recipeService.addRecipe(this.modelForm.value).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Recipe has been added successfully!');
    });
  }

  close() {
    this.dialogRef.close();
  }
}

