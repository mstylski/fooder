import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-form-modal',
  templateUrl: './recipe-form-modal.component.html',
  styleUrls: ['./recipe-form-modal.component.scss']
})

export class RecipeFormModalComponent implements OnInit {
  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(console.log);
    this.modelForm = this.formBuilder.group({
      title: '',
      kind: '',
      formula: '',
      isVegan: ''
    });
  }

  addRecipe() {
    this.recipeService.addRecipe(this.modelForm.value).subscribe(() => {
      console.log('Przepis dodany poprawnie');
    });
  }
}

