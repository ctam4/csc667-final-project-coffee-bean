import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
} from './types';

export const addItem = (item) => ({
  type: CART_ADD_ITEM,
  item,
});

export const removeItem = (productId) => ({
  type: CART_REMOVE_ITEM,
  productId,
});

export const clearCart = () => ({
  type: CART_CLEAR,
});
