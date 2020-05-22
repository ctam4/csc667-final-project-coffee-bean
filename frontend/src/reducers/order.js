import { ORDER_FETCH_ORDERS, ORDER_FETCH_ORDER } from '../actions/types';

// so orderHistory is an object that stores amount of orders
// the user has purchased and each order index represents and order of that time.
// maybe needs to be refactored to have orders represent an object instead of an array?
const INITIAL_STATE = {
  orderHistory: {
    0: {
      orders: [{ name: 'frap1', price: 1.0, img: 'IMAGE_PLACEHOLDER' }],
    },
    1: {
      orders: [
        { name: 'pina', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'oranges', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    2: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    3: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    4: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    5: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    6: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    7: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    8: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    9: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    10: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    11: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    12: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    13: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    14: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    15: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    16: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    17: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    18: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    19: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
    20: {
      orders: [
        { name: 'cafe', price: 1.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'FRAPPP', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
        { name: 'Americano', price: 4.0, img: 'IMAGE_PLACEHOLDER' },
      ],
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_FETCH_ORDER:
      return {
        ...state,
        test: 'testing value',
      };
    case ORDER_FETCH_ORDERS:
      return {
        ...state,
        test: 'DUMMY DATA',
      };
    default:
      return state;
  }
};
