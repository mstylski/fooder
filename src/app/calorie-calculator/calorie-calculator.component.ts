import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { nutritionFacts } from './nutrition-facts';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent implements OnInit {
  readonly nutritionFacts = nutritionFacts;
  summed: number;
  modelForm: FormGroup;
  mealsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private ref: ChangeDetectorRef) {
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
      meals: this.formBuilder.array([]),
      summed: [null]
    });
  }

  selectedProductFormGroup(): FormGroup {
    const basicFacts = this.modelForm?.value?.nutritionFacts.nutritionFacts;
    const count = this.modelForm?.value?.quantity;
    return this.formBuilder.group({
      calories: this.modelForm?.value?.nutritionFacts.totalCalories * count,
      fat: Math.round(basicFacts?.totalFat * count) ,
      carbs: Math.round(basicFacts?.totalCarbohydrate * count),
      protein: Math.round(basicFacts?.protein * count),
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

  totalAmount() {
    return {
      calories: Math.round((this.meals.controls
        .reduce((acc, mealsForm) => acc + mealsForm.get('calories').value, 0))),
      fat: Math.round((this.meals.controls
        .reduce((acc, mealsForm) => acc + mealsForm.get('fat').value, 0))),
      carbs: Math.round((this.meals.controls
        .reduce((acc, mealsForm) => acc + mealsForm.get('carbs').value, 0))),
      protein: Math.round((this.meals.controls.
      reduce((acc, mealsForm) => acc + mealsForm.get('protein').value, 0))),
    };
  }
}
