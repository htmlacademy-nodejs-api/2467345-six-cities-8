import { UserType } from '../../../types/user.type.js';

export class CreateUserDto {
  public email: string;
  public name: string;
  public avatarUrl?: string;
  public type: UserType;
  public password: string;
}
