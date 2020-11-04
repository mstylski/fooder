import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeResponse } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-receipt-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})


export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeResponse;


  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient,
              private snackBar: MatSnackBar,
              private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => this.recipe = data.recipe);
  }

  deleteImage(imageId) {
    return this.httpClient.delete<any>(`${ environment.apiUrl }/file-upload/recipes/` + imageId).subscribe(() => {
      this.snackBar.open('Image has been deleted successfully!', null, {
        panelClass: ['green-snackbar']
      });
      this.recipeService.getRecipe(this.recipe.id).subscribe(recipe => this.recipe = recipe);
    });
  }
}
