import {Dispatch} from 'redux';
import {Category} from '../../../helpers/category-list';
import {Products} from '../../../helpers/product-list';
import {
  ADD_TO_CART,
  GET_CATEGORIES,
  GET_PRODUCTS,
  ADD_TO_WISHLIST,
  IAddToCart,
  IAddToWishlist,
  IGetCategories,
  IGetProducts,
  IProduct,
  IRemoveFromCart,
  REMOVE_FROM_CART,
  ICard,
  ISaveCard,
  SAVE_CARD,
} from './shop.d';

export const getProductsByCategory =
  (categoryId: string, cb: () => void) =>
  (dispatch: Dispatch<IGetProducts>) => {
    const result: IProduct[] = Products.filter(
      val => val.categoryId === categoryId,
    );
    const res = dispatch({
      type: GET_PRODUCTS,
      payload: result,
    });
    cb();
    return res;
  };

export const getAllCategories =
  (cb: () => void) => (dispatch: Dispatch<IGetCategories>) => {
    const result = Category;
    const res = dispatch({
      type: GET_CATEGORIES,
      payload: result,
    });
    cb();
    return res;
  };

export const addToCart =
  (data: IProduct[], cb: () => void) => (dispatch: Dispatch<IAddToCart>) => {
    const result = dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
    cb();
    return result;
  };

export const saveCard =
  (data: ICard, cb: () => void) => (dispatch: Dispatch<ISaveCard>) => {
    const result = dispatch({
      type: SAVE_CARD,
      payload: data,
    });
    cb();
    return result;
  };

export const addToWishlist =
  (data: IProduct[]) => (dispatch: Dispatch<IAddToWishlist>) => {
    return dispatch({
      type: ADD_TO_WISHLIST,
      payload: data,
    });
  };

export const removeFromCart =
  (data: IProduct[], cb: () => void) =>
  (dispatch: Dispatch<IRemoveFromCart>) => {
    const result = dispatch({
      type: REMOVE_FROM_CART,
      payload: data,
    });
    cb();
    return result;
  };
