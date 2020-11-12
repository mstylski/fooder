import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Kind, RecipeResponse } from '../../shared/models/recipe.model';
import { RecipeFormModalComponent } from '../recipe-form-modal/recipe-form-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from '../recipe.service';
import { filter, finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalConfig, ConfirmationResult } from '../../shared/components/confirmation-modal/confirmation-modal-configs';
import { PageEvent } from '@angular/material/paginator';
import { NotificationService } from '../../shared/notification.service';

export interface Tab {
  label: string;
  content: string;
}

export const defaultPageEvent: PageEvent = {
  pageIndex: 0,
  pageSize: 10,
  length: 0
};

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  @Pipe({
    name: 'dataFilter',
  })
  asyncTabs: Observable<Tab[]>;
  recipes: RecipeResponse[] = [];
  recipesByKind: RecipeResponse[] = [];
  isLoading = false;
  numberOfMainRecipes: number;
  numberOfStarterRecipes: number;
  numberOfSoupRecipes: number;
  numberOfDessertRecipes: number;
  private readonly pagination$ = new BehaviorSubject<PageEvent>(defaultPageEvent);
  subscription = new Subscription();


  constructor(public dialog: MatDialog,
              private recipeService: RecipeService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  paginate(event: PageEvent) {
    this.pagination$.next(event);
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

  deleteRecipe(value: RecipeResponse) {
    this.recipeService.deleteRecipe(value.id).subscribe(() => {
      this.getRecipes();
      this.notificationService.success('Recipe has been deleted successfully!');
    });
  }

  openEditRecipeDialog(recipe: RecipeResponse) {
    const edited$ = this.dialog
      .open(RecipeFormModalComponent, {
        width: '700px',
        disableClose: true,
        data: { recipe },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => this.getRecipes());
  }

  displayConfirmationModal(recipe: RecipeResponse) {
    const asked$ = this.dialog
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
  filterbyTitle(title) {
    this.recipesByKind = this.recipes.filter(recipe => recipe.title.toLowerCase().includes(title.toLowerCase()));
  }

  private setCounters() {
    this.numberOfMainRecipes = this.recipes.filter(recipe => recipe.kind === Kind.MAIN).length;
    this.numberOfStarterRecipes = this.recipes.filter(recipe => recipe.kind === Kind.STARTER).length;
    this.numberOfSoupRecipes = this.recipes.filter(recipe => recipe.kind === Kind.SOUP).length;
    this.numberOfDessertRecipes = this.recipes.filter(recipe => recipe.kind === Kind.DESSERT).length;
  }
}


