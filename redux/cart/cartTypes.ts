import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART } from './cartActions';

export interface CartItem {
  Id: number;
  ProductName: string;
  Price: number;
  Quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: { id: string };
}

export interface UpdateCartItemAction {
  type: typeof UPDATE_CART_ITEM;
  payload: { id: string; quantity: number };
}

export interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | UpdateCartItemAction | ClearCartAction;
