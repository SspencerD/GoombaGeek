import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActionTypes,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CHECKOUT,
  CartItemType,
} from './cartActionTypes';

export const addToCart = (
  productId: string,
  nameProduct: string,
  imageProduct: string,
  quantity: number,
  price: number,
): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: {productId, nameProduct, imageProduct, quantity, price},
});

export const removeFromCart = (productId: string): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: {productId},
});

export const increaseQty = (productId: string): CartActionTypes => ({
  type: INCREASE_QUANTITY,
  payload: {productId},
});

export const decreaseQty = (productId: string): CartActionTypes => ({
  type: DECREASE_QUANTITY,
  payload: {productId},
});

export const checkout = (
  orderNumber: number,
  iva: number,
  total: number,
  items: CartItemType[],
): CartActionTypes => ({
  type: CHECKOUT,
  payload: {
    orderNumber: orderNumber,
    iva,
    total,
    items,
  },
});
