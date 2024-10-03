import { defaultClasses, getModelForClass, prop } from '@typegoose/typegoose';

import { User } from '../../types/index.js';
import { UserType } from '../../types/user.type.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true })
  public name: string;

  @prop({ required: false, default: '' })
  public avatarUrl: string | null;

  @prop({ required: true })
  public password: string;

  @prop({ required: true, default: 'default' })
  public type: UserType;
}

export const UserModel = getModelForClass(UserEntity);
