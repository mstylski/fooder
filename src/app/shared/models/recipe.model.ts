export enum Kind {
  STARTER = 'starter',
  MAIN = 'main',
  DESSERT = 'dessert',
  SOUP = 'soup',
}

export interface RecipeHttpPayload {
  title: string;
  kind: Kind;
  formula: string;
  isVegan: boolean;
}

export interface RecipeResponse {
  title: string;
  kind: Kind;
  formula: string;
  isVegan: boolean;
  userId: number;
  createdAt: string;
  id: string;
}
