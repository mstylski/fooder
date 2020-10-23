import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RecipeResponse } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeResponse[] = [
    {
      title: 'Kimchi',
      kind: 'starter',
      formula: '1kg kapusty, chilii, cebula',
      isVegan: true,
      userId: 1,
      createdAt: '',
      id: ''
    },
    {
      title: 'Udon',
      kind: 'main',
      formula: 'udon, puder z nori, warzywa sezonowe',
      isVegan: true,
      userId: 2,
      createdAt: '',
      id: ''
    },
    {
      title: 'Kurczak Sekretarza Kima',
      kind: 'main',
      formula: 'kurczak, ryż jaśminowy, warzywa sezonowe',
      isVegan: false,
      userId: 3,
      createdAt: '',
      id: ''
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
