import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { auth } from './auth';
import { cart } from './cart';
import { alerts } from './alerts';
import { products } from './products';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducer = combineReducers({
  auth,
  cart,
  alerts,
  products,
});

export default persistReducer(persistConfig, rootReducer);
