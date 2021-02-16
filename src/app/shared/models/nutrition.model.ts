export interface NutritionModel {
  name?: string;
  totalCalories?: number;
  totalKj?: number;
  quantity?: number;
  nutritionFacts?: NutritionFacts;
  timeToBurn?: TimeToBurn;
}

export interface NutritionFacts {
  totalFat: number;
  totalFatPercentage: number;
  saturatedFat: number;
  polyunsaturatedFat: number;
  monounsaturatedFat: number;
  cholesterol: number;
  totalCholesterolPercentage: number;
  sodium: number;
  totalSodiumPercentage: number;
  totalCarbohydrate: number;
  totalCarbohydratePercentage: number;
  fiber: number;
  totalFiberPercentage: number;
  sugars: number;
  protein: number;
  calcium: number;
  potassium: number;
  alcohol?: number;
  iron: number;
  vitA: number;
  vitC: number;
  caffeine?: number;
}

export interface TimeToBurn {
  swimming: number;
  running: number;
  cycling: number;
  walking: number;
}

