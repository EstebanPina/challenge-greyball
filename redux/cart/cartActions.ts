import { CartItem, AddToCartAction, RemoveFromCartAction, UpdateCartItemAction, ClearCartAction } from '@/redux/cart/cartTypes';

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";


export const addToCart = (item: CartItem): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id: string): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const updateCartItem = (id: string, quantity: number): UpdateCartItemAction => ({
  type: UPDATE_CART_ITEM,
  payload: { id, quantity },
});

export const clearCart = (): ClearCartAction => ({
  type: CLEAR_CART,
});
