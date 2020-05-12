import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
  ORDER_FETCH_ORDERS,
  ORDER_FETCH_ORDER,
  USER_SET_EMAIL,
  USER_SET_PASSWORD,
  USER_SET_ISLOGGEDIN,
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

export const setEmail = (email) => ({
  type: USER_SET_EMAIL,
  email,
});

export const setPassword = (password) => ({
  type: USER_SET_PASSWORD,
  password,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: USER_SET_ISLOGGEDIN,
  isLoggedIn,
});
