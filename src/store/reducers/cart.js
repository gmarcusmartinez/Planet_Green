import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } from '../actions/types';
import { addItemToCart, removeItemFromCart } from '../../utils';
const initialState = {
  cartItems: [],
};

export const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload._id),
      };
    default:
      return state;
  }
};
