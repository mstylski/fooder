import { Recipe } from './recipe.model';

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
  recipes?: Recipe[];
}

export interface UserLoginResponse {
  user: User;
  token: string;
}

export interface CooksPage {
  page: number;
  pageCount: number;
  numberOfUsers: number;
  cooks: User[];
  itemCount: number;
  avatarUrl: string;
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
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other'
}

export enum Diet {
  KETOGENIC = 'ketogenic',
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  PESCETARIAN = 'pescetarian',
  LOWFODMAP = 'lowfodmap',
  PALEO = 'paleo',
  FREEGANISM = 'freeganism',
  OMNIVOROUS = 'omnivorous'
}
