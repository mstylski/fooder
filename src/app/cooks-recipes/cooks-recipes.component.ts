import { Component, Inject, Optional } from '@angular/core';
import { User } from '../shared/models/user.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service';
import { NotificationService } from '../shared/notification.service';
import { Recipe, RecipeHttpPayload } from '../shared/models/recipe.model';

@Component({
  selector: 'app-cooks-recipes',
  templateUrl: './cooks-recipes.component.html',
})
export class CooksRecipesComponent {
  user: User;


  constructor(@Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: User,
              private router: Router,
              private bottomSheet: MatBottomSheetRef<CooksRecipesComponent>,
              private recipeService: RecipeService,
              private  notificationService: NotificationService) {
    this.user = data;
  }

  navigate(id: string) {
    this.bottomSheet.dismiss();
    this.router.navigate([`/dashboard/recipes/${ id }`]);
  }


  addRecipe(recipe: Recipe) {
    const payload: RecipeHttpPayload = {
      title: recipe.title,
      formula: recipe.formula,
      isVegan: recipe.isVegan,
      kind: recipe.kind,
    };
    this.recipeService.addRecipe(payload).subscribe();
    this.notificationService.success('Recipe has been copied to your list successfully!');
  }
}
