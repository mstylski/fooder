import { Component, OnInit } from '@angular/core';
import { nutritionFacts } from './nutrition-facts';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent implements OnInit {
  readonly nutritionFacts = nutritionFacts;
  modelForm: FormGroup;
  mealsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.totalAmount();
  }

  private buildForm() {
    this.modelForm = this.formBuilder.group({
      nutritionFacts: nutritionFacts[0],
      quantity: [1]
    });
    this.mealsForm = this.formBuilder.group({
      meals: this.formBuilder.array([])
    });
  }

  selectedProductFormGroup(): FormGroup {
    const basicFacts = this.modelForm?.value?.nutritionFacts.nutritionFacts;
    const count = this.modelForm?.value?.quantity;
    return this.formBuilder.group({
      calories: this.modelForm?.value?.nutritionFacts.totalCalories * count,
      fat: basicFacts?.totalFat * count,
      carbs: basicFacts?.totalCarbohydrate * count,
      protein: basicFacts?.protein * count,
    });
  }

  addSelectedProductToMealsList() {
    this.meals.push(this.selectedProductFormGroup());
  }

  get meals(): FormArray {
    return this.mealsForm.get('meals') as FormArray;
  }

  removeMeal(i): void {
    this.meals.removeAt(i);
  }

  totalAmount(): FormGroup {
    const basicFacts = this.modelForm?.value?.nutritionFacts.nutritionFacts;
    const count = this.modelForm?.value?.quantity;
    return this.formBuilder.group({
      calories: this.modelForm?.value?.nutritionFacts.totalCalories * count,
      fat: basicFacts?.totalFat * count,
      carbs: basicFacts?.totalCarbohydrate * count,
      protein: basicFacts?.protein * count,
    });
  }
}
