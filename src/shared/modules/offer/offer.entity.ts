import {
  defaultClasses,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { City, Goods, Location, OfferType } from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}
@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public id: string;

  @prop({ trim: true, required: true })
  public title: string;

  @prop({ trim: true, required: true })
  public description: string;

  @prop({ required: false, default: Date.now() })
  public createdDate: Date;

  @prop({ enum: City, required: true })
  public city: City;

  @prop({ required: true })
  public previewImage: string;

  @prop({ type: () => String, required: true })
  public images: string[];

  @prop({ required: true, default: false })
  public isPremium: boolean;

  @prop({ required: true, default: false })
  public isFavorite: boolean;

  @prop({ required: true })
  public rating: number;

  @prop({ enum: OfferType, required: true })
  public type: OfferType;

  @prop({ required: true })
  public bedrooms: number;

  @prop({ required: true })
  public maxAdults: number;

  @prop({ required: true })
  public price: number;

  @prop({ type: () => String, enum: Goods, required: true })
  public goods: Goods[];

  @prop({ ref: UserEntity, required: true })
  public hostId: Ref<UserEntity>;

  @prop({ required: true })
  public comments: number;

  @prop({ required: true })
  public location: Location;
}
export const OfferModel = getModelForClass(OfferEntity);
