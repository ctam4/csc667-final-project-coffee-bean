import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  FETCH_ORDERS,
  FETCH_ORDER,
  USER_SET_EMAIL,
  USER_SET_PASSWORD,
  USER_SET_LOGIN,
} from './types';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
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
  type: USER_SET_LOGIN,
  isLoggedIn: isLoggedIn,
});
