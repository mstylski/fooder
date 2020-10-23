
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


