import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Kind, RecipeResponse } from '../../shared/models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-recipe-form-modal',
  templateUrl: './recipe-form-modal.component.html',
  styleUrls: ['./recipe-form-modal.component.scss'],
})

export class RecipeFormModalComponent implements OnInit {
  recipe: RecipeResponse;
  modelForm: FormGroup;
  readonly kind = Kind;
  createdRecipeId: string;

  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipeService,
              private httpClient: HttpClient,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RecipeFormModalComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) data: { recipe: RecipeResponse }) {
    if (data) {
      this.recipe = data.recipe;
    }
  }


  ngOnInit() {
    this.buildForm();
  }

  addRecipe() {
    this.recipeService.addRecipe(this.modelForm.value).subscribe((recipe) => {
      this.createdRecipeId = recipe.id;
      this.snackBar.open('Recipe has been added successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
  }

  uploadImage(event) {
      const files = Array.from(event.target.files) as Blob[];
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      this.httpClient.post<any>(`${ environment.apiUrl }/file-upload/recipes/` + this.createdRecipeId, formData).subscribe(() => {
        this.recipeService.getRecipe(this.createdRecipeId).subscribe(recipe => this.recipe = recipe);
        this.dialogRef.close(true);
        this.snackBar.open('Image has been added successfully!', null, {
          panelClass: ['green-snackbar']
        });
      });
    }

  editRecipe() {
    console.log(this.recipe);
    this.recipeService.editRecipe(this.modelForm.value, this.recipe.id).subscribe(() => {
      this.dialogRef.close(true);
      this.snackBar.open('Recipe has been updated successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
  }

  private buildForm() {
    const defaultValues = {
      title: '',
      kind: Kind.MAIN,
      formula: '',
      isVegan: true,
    };
    const recipe = this.recipe || defaultValues;
    this.modelForm = this.formBuilder.group({
      title: [recipe.title, { validators: [Validators.required] }],
      kind: [recipe.kind, { validators: [Validators.required] }],
      formula: [recipe.formula, { validators: [Validators.required] }],
      isVegan: [recipe.isVegan, { validators: [Validators.required] }],
    });
  }

  close() {
    this.dialogRef.close();
  }
}

