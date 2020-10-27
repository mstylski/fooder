import { Component, OnInit } from '@angular/core';
import { Kind, RecipeResponse } from '../../shared/models/recipe.model';
import { RecipeFormModalComponent } from '../recipe-form-modal/recipe-form-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from '../recipe.service';
import { filter, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Observer } from 'rxjs';

export interface Tab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  asyncTabs: Observable<Tab[]>;
  recipes: RecipeResponse[] = [];
  isLoading = false;
  numberOfMainRecipes: number;
  numberOfStarterRecipes: number;
  numberOfSoupRecipes: number;
  numberOfDessertRecipes: number;

  constructor(public dialog: MatDialog,
              private recipeService: RecipeService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  openDialog() {
    this.dialog.open(RecipeFormModalComponent, {
      width: '700px',
      disableClose: true,
    })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => this.getRecipes());
  }

  public getRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(recipes => {
      this.recipes = recipes;
      this.setCounters();
    });
  }

  deleteRecipe(value: RecipeResponse) {
    this.recipeService.deleteRecipe(value.id).subscribe(() => {
      this.getRecipes();
      this.snackBar.open('Recipe has been deleted successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
  }

  private setCounters() {
    this.numberOfMainRecipes = this.recipes.filter(recipe => recipe.kind === Kind.MAIN).length;
    this.numberOfStarterRecipes = this.recipes.filter(recipe => recipe.kind === Kind.STARTER).length;
    this.numberOfSoupRecipes = this.recipes.filter(recipe => recipe.kind === Kind.SOUP).length;
    this.numberOfDessertRecipes = this.recipes.filter(recipe => recipe.kind === Kind.DESSERT).length;
  }
}


