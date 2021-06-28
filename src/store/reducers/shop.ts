import {Reducer} from 'redux';
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  GET_CATEGORIES,
  GET_PRODUCTS,
  SAVE_CARD,
  ShopActions,
  ShopState,
} from '../actions/shop/shop.d';

const InitialState = {
  products: [],
  cart: [],
  categories: [],
  wishlist: [],
  card: null,
};

const shopReducer: Reducer<ShopState, ShopActions> = (
  state: ShopState = InitialState,
  actions: ShopActions,
): ShopState => {
  switch (actions.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: actions.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart?.concat(actions.payload),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist?.concat(actions.payload),
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: actions.payload,
      };
    case SAVE_CARD:
      return {
        ...state,
        card: actions.payload,
      };
    default:
      return InitialState;
  }
};

export default shopReducer;
