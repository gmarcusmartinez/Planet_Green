import axios from 'axios';
import { GET_PRODUCTS, GET_PRODUCT, SORT_PRODUCTS } from './types';

export const getProducts = (category, filterText) => async (dispatch) => {
  try {
    const result = await axios.get(`/api/products/`);
    const { data } = result.data;
    const categoryProducts = data.filter((p) => p.category === category);
    const payload = categoryProducts.filter((p) =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    dispatch({ type: GET_PRODUCTS, payload });
  } catch (err) {
    console.log(err.message);
  }
};

export const getProduct = (_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${_id}`);
    dispatch({ type: GET_PRODUCT, payload: data.product });
  } catch (err) {
    console.log(err.message);
  }
};
export const sortProducts = (order) => ({
  type: SORT_PRODUCTS,
  payload: order,
});
