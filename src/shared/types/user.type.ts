export type UserType = 'pro' | 'default';

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  password: string;
  type: UserType;
}
