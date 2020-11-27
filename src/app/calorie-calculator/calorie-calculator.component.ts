import { Component, OnInit } from '@angular/core';
import { nutritionFacts } from './nutrition-facts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NutritionModel } from '../shared/models/nutrition.model';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent implements OnInit {
  readonly nutritionFacts = nutritionFacts;
  readonly quantity: NutritionModel;
  modelForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {

    this.modelForm = this.formBuilder.group({
      nutritionFacts: nutritionFacts[0],
      quantity: [1]
    });
  }
}
