import { Location } from '../../../types/index.js';
import { City, Goods, OfferType } from '../../../types/offer.type.js';

export class CreateOfferDto {
  id: string;
  title: string;
  description: string;
  createdDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Goods[];
  hostId: string;
  comments: number;
  location: Location;
}
