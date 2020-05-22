import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
  ORDER_FETCH_ORDERS,
  ORDER_FETCH_ORDER,
} from './types';

export const addItem = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: CART_REMOVE_ITEM,
  payload: itemId,
});

export const clearCart = () => ({
  type: CART_CLEAR,
});

export const fetchOrders = () => {
  // console.log('FETCHING ALL ORDERS TEST');
};

export const fetchOrder = (id) => {
  // console.log(`FETCHING ORDER WITH ID: ${id}`);
};
