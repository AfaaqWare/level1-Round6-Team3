export interface AdminUser {
  id: string;
  name: string;
  email: string;
  provider: string;
  isEmailVerified: boolean;
  userIsActive: boolean;
  role: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}
