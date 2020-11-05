
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
}

export interface UserResponse {
  user: User;
  token: string;
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
