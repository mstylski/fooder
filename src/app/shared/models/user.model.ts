
export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
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
  diet: string;
  aboutMe: string;
  age: number;
  gender: Gender;
}

export enum Gender {
  FEMALE= 'female',
  MALE = 'male',
  OTHER = 'other'
}
