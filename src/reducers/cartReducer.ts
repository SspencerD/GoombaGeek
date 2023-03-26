import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActionTypes,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CartItemType,
  CHECKOUT,
} from '../actions/cartActionTypes';

export interface CartItem {
  productId: string;
  nameProduct: string;
  imageProduct: string;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItemType[];
  checkoutResult?: {
    orderNumber: number;
    iva: number;
    total: number;
    items: CartItemType[];
  };
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId,
      );

      if (existingItemIndex >= 0) {
        const updateItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {...item, quantity: item.quantity + action.payload.quantity};
          }
        });
        updateItems[existingItemIndex].quantity += action.payload.quantity;

        return {...state, items: updateItems};
      } else {
        return {...state, items: [...state.items, action.payload]};
      }

    case REMOVE_FROM_CART:
      const newItems = state.items.filter(
        item => item.productId !== action.payload.productId,
      );
      return {
        ...state,
        items: newItems,
      };

    case INCREASE_QUANTITY:
      const increaseItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId,
      );

      if (increaseItemIndex >= 0) {
        const updateItems = state.items.map((item, index) => {
          if (index === increaseItemIndex) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        });
        return {...state, items: updateItems};
      }
      return state;
    // eslint-disable-next-line no-fallthrough
    case DECREASE_QUANTITY:
      const decreaseItemIndex = state.items.findIndex(
        item => item.productId === action.payload.productId,
      );
      if (decreaseItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) => {
          if (index === decreaseItemIndex) {
            const newQuantity = Math.max(item.quantity - 1, 1);
            return {...item, quantity: newQuantity};
          }
          return item;
        });
        return {...state, items: updatedItems};
      }
      return state;
    case CHECKOUT:
      return {
        ...state,
        items: [],
        checkoutResult: {
          orderNumber: action.payload.orderNumber,
          iva: action.payload.iva,
          total: action.payload.total,
          items: action.payload.items,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
