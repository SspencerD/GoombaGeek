export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CHECKOUT = 'CHECKOUT';

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: {
    productId: string;
    nameProduct: string;
    imageProduct: string;
    price: number;
    quantity: number;
  };
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: {
    productId: string;
  };
}

export interface IncreaseQuantityAction {
  type: typeof INCREASE_QUANTITY;
  payload: {
    productId: string;
  };
}

export interface DecreaseQuantityAction {
  type: typeof DECREASE_QUANTITY;
  payload: {
    productId: string;
  };
}

export interface CartItemType {
  productId: string;
  nameProduct: string;
  imageProduct: string;
  price: number;
  quantity: number;
}

export interface CheckoutAction {
  type: typeof CHECKOUT;
  payload: {
    orderNumber: number;
    iva: number;
    total: number;
    items: CartItemType[];
  };
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveFromCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | CheckoutAction;
