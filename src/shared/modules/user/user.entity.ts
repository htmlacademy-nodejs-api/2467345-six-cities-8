import { User } from '../../types/index.js';
import { UserType } from '../../types/user.type.js';

export class UserEntity implements User {
  public email: string;
  public name: string;
  public avatarUrl: string | null;
  public password: string;
  public type: UserType;
}
