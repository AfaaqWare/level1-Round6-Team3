export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
