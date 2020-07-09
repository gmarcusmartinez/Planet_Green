import { GET_PRODUCTS, GET_PRODUCT, SORT_PRODUCTS } from '../actions/types';
import { sortItems } from '../../utils/index';

const initialState = {
  loading: true,
  item: null,
  items: [],
};

export const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        items: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        item: payload,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        items: sortItems(state.items, payload),
      };

    default:
      return state;
  }
};
