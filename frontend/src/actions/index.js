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

export const addItem = (item) => {
  return {
    type: CART_ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: itemId,
  };
};

export const clearCart = () => {
  return {
    type: CART_CLEAR,
  };
};

export const fetchOrders = () => {
  console.log('FETCHING ALL ORDERS TEST');
};

export const fetchOrder = (id) => {
  console.log('FETCHING ORDER WITH ID: ' + id);
};

export const setEmail = (email) => ({
  type: USER_SET_EMAIL,
  email: email,
});

export const setPassword = (password) => ({
  type: USER_SET_PASSWORD,
  password: password,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: USER_SET_ISLOGGEDIN,
  isLoggedIn: isLoggedIn,
});
