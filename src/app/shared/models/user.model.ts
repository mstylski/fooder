import { RecipeResponse } from './recipe.model';

export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  diet: Diet;
  aboutMe: string;
  gender: Gender;
  dateOfBirth: string;
  avatarUrl: string;
  loggedAt: string;
  numberOfRecipes?: number;
  recipes?: RecipeResponse[];
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface CooksResponse {
  page: number;
  limit: number;
  numberOfUsers: number;
  cooks: User[];
  numberOfRecipes: number;
}


export interface UpdateProfileHttpPayload {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  diet: Diet;
  aboutMe: string;
  gender: Gender;
  dateOfBirth: string;
}

export enum Gender {
  FEMALE= 'female',
  MALE = 'male',
  OTHER = 'other'
}

export enum Diet {
  KETOGENIC= 'ketogenic',
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  PESCETARIAN = 'pescetarian',
  LOWFODMAP = 'lowfodmap',
  PALEO = 'paleo',
  FREEGANISM = 'freeganism',
  OMNIVOROUS = 'omnivorous'
}
