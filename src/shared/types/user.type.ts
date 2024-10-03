export type UserType = 'pro' | 'default';

export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  password: string;
  type: UserType;
}
