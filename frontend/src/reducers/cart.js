import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR, } from '../actions/types';

const INITIAL_STATE = {
  price: 0,
  items: [
    { name: 'dads', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'a', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'FRAPPP', price: 4.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'FRAPPP', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'FRAPPP', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'aaaaaaaaaaaaaaaaaaaaaaaaa', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
    { name: 'awdasdawdasdasd', price: 1.00, img: 'IMAGE_PLACEHOLDER' },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    case CART_REMOVE_ITEM:
      console.log('CALLED REMOVING ITEM REDUCER');
      return {
        ...state,
        items: state.items.filter((item, idx) => idx !== action.payload),
      };
    case CART_CLEAR:
      return {
        ...state,
        price: 0,
        items: [],
      };
    default:
      return state;
  }
};
