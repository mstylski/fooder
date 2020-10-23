export interface RecipeHttpPayload {
  title: string;
  kind: string;
  formula: string;
  isVegan: boolean;
}

export interface RecipeResponse {
  title: string;
  kind: string;
  formula: string;
  isVegan: boolean;
  userId: number;
  createdAt: string;
  id: string;
}
