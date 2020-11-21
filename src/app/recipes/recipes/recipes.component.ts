import { Component, OnDestroy, OnInit } from '@angular/core';
import { Kind, Recipe } from '../../shared/models/recipe.model';
import { RecipeFormModalComponent } from '../recipe-form-modal/recipe-form-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from '../recipe.service';
import { filter, finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalConfig, ConfirmationResult } from '../../shared/components/confirmation-modal/confirmation-modal-configs';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesByKind: Recipe[] = [];
  isLoading = false;
  numberOfMainRecipes: number;
  numberOfStarterRecipes: number;
  numberOfSoupRecipes: number;
  numberOfDessertRecipes: number;
  subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
      this.filterRecipesByKind(0);
      this.setCounters();
    });
  }

  deleteRecipe(value: Recipe) {
    this.recipeService.deleteRecipe(value.id).subscribe(() => {
      this.getRecipes();
      this.notificationService.success('Recipe has been deleted successfully!');
    });
  }

  openEditRecipeDialog(recipe: Recipe) {
    this.dialog
      .open(RecipeFormModalComponent, {
        width: '700px',
        disableClose: true,
        data: { recipe },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => this.getRecipes());
  }

  displayConfirmationModal(recipe: Recipe) {
    this.dialog
      .open(ConfirmationModalComponent, {
        panelClass: 'custom-mat-confirm-dialog',
        data: {
          title: 'Delete recipe',
          body: 'Do you really want to delete this recipe?',
          confirmBtnText: `Yes`,
          cancelBtnText: `No!`
        } as ConfirmationModalConfig
      })
      .afterClosed()
      .pipe(filter(result => result === ConfirmationResult.CONFIRM))
      .subscribe(() => {
        this.deleteRecipe(recipe);
      });
  }

  filterRecipesByKind(tabIndex: number) {
    if (tabIndex === 0) {
      this.recipesByKind = this.recipes;
    }

    if (tabIndex === 1) {
      this.recipesByKind = this.recipes.filter(recipe => recipe.kind === Kind.STARTER);
    }

    if (tabIndex === 2) {
      this.recipesByKind = this.recipes.filter(recipe => recipe.kind === Kind.MAIN);
    }

    if (tabIndex === 3) {
      this.recipesByKind = this.recipes.filter(recipe => recipe.kind === Kind.SOUP);
    }

    if (tabIndex === 4) {
      this.recipesByKind = this.recipes.filter(recipe => recipe.kind === Kind.DESSERT);
    }
  }

  filterByTitle(title: string) {
    this.recipesByKind = this.recipes.filter(recipe => recipe.title.toLowerCase().includes(title.toLowerCase()));
  }

  private setCounters() {
    this.numberOfMainRecipes = this.recipes.filter(recipe => recipe.kind === Kind.MAIN).length;
    this.numberOfStarterRecipes = this.recipes.filter(recipe => recipe.kind === Kind.STARTER).length;
    this.numberOfSoupRecipes = this.recipes.filter(recipe => recipe.kind === Kind.SOUP).length;
    this.numberOfDessertRecipes = this.recipes.filter(recipe => recipe.kind === Kind.DESSERT).length;
  }
}


