import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';

import { User } from '../../types/index.js';
import { UserType } from '../../types/user.type.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true, default: '' })
  public name: string;

  @prop({ required: false, default: '' })
  public avatarUrl: string | null;

  @prop({ required: true})
  private password: string;

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.name = userData.name;
    this.avatarUrl = userData.avatarUrl;
    this.type = userData.type;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  @prop({ required: true, default: 'default' })
  public type: UserType;
}

export const UserModel = getModelForClass(UserEntity);
