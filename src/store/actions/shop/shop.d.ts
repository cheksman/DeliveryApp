import {ImageSourcePropType} from 'react-native';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const SAVE_CARD = 'SAVE_CARD';

export interface IProduct {
  productId: string;
  productName: string;
  productImage: ImageSourcePropType;
  unit?: string;
  price: string;
  measure?: string;
  description?: string;
  stock?: number;
  location?: string;
  categoryId: string;
}

export interface ICard {
  cardName: string;
  cardDate: string;
  cardCvc: string;
  cardNumber: string;
}

export interface ICategory {
  categoryId: string;
  categoryName: string;
  categoryImage: ImageSourcePropType;
  productsNumber: number;
  tags: string[];
}

interface IGetProducts {
  type: typeof GET_PRODUCTS;
  payload: IProduct[];
}

interface IGetCategories {
  type: typeof GET_CATEGORIES;
  payload: ICategory[];
}

interface IAddToCart {
  type: typeof ADD_TO_CART;
  payload: IProduct[];
}

interface IAddToWishlist {
  type: typeof ADD_TO_WISHLIST;
  payload: IProduct[];
}

interface IRemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: IProduct[];
}

interface ISaveCard {
  type: typeof SAVE_CARD;
  payload: ICard;
}

interface IClearCart {
  type: typeof CLEAR_CART;
}

export type ShopActions =
  | IGetProducts
  | IRemoveFromCart
  | IAddToCart
  | IAddToWishlist
  | IGetCategories
  | ISaveCard
  | IClearCart;

export type ShopState = {
  products?: IProduct[];
  cart?: IProduct[];
  categories?: ICategory[];
  wishlist?: IProduct[];
  card?: null | ICard;
};
