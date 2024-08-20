import { CartState, CartActionTypes} from '@/redux/cart/cartTypes';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART } from '@/redux/cart/cartActions';
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(item => item.Id === action.payload.Id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].Quantity += action.payload.Quantity;

        const updatedTotalAmount = state.totalAmount + action.payload.Price * action.payload.Quantity;
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      } else {
        return {
          items: [...state.items, action.payload],
          totalAmount: state.totalAmount + action.payload.Price * action.payload.Quantity,
        };
      }

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => item.Id !== action.payload.id);
      const removedItem = state.items.find(item => item.Id === action.payload.id);
      const reducedAmount = removedItem ? removedItem.Price * removedItem.Quantity : 0;

      return {
        items: filteredItems,
        totalAmount: state.totalAmount - reducedAmount,
      };

    case UPDATE_CART_ITEM:
      const itemIndex = state.items.findIndex(item => item.Id === action.payload.id);
      if (itemIndex >= 0) {
        const updatedItems = [...state.items];
        const oldItem = updatedItems[itemIndex];
        const updatedItem = { ...oldItem, quantity: action.payload.quantity };
        updatedItems[itemIndex] = updatedItem;

        const updatedTotalAmount = state.totalAmount - (oldItem.Price * oldItem.Quantity) + (updatedItem.Price * updatedItem.Quantity);

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      return state;

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
