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
} from './shop.d';

export const getProductsByCategory =
  (categoryId: string, cb: () => void) =>
  (dispatch: Dispatch<IGetProducts>) => {
    const result: IProduct[] = Products.filter(
      val => val.categoryId === categoryId,
    );
    cb();
    return dispatch({
      type: GET_PRODUCTS,
      payload: result,
    });
  };

export const getAllCategories =
  (cb: () => void) => (dispatch: Dispatch<IGetCategories>) => {
    const result = Category;
    cb();
    return dispatch({
      type: GET_CATEGORIES,
      payload: result,
    });
  };

export const addToCart =
  (data: IProduct[], cb: () => void) => (dispatch: Dispatch<IAddToCart>) => {
    cb();
    return dispatch({
      type: ADD_TO_CART,
      payload: data,
    });
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
    cb();
    return dispatch({
      type: REMOVE_FROM_CART,
      payload: data,
    });
  };
