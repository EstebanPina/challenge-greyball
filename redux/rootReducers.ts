import { combineReducers } from 'redux';
import { cartReducer } from '@/redux/cart/cartReducers';

export const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
