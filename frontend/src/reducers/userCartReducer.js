import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
} from '../actions/types';

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
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    case REMOVE_ITEM:
      console.log('CALLED REMOVING ITEM REDUCER');
      return {
        ...state,
        items: state.items.filter((item, idx) => idx !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        price: 0,
        items: [],
      };
    default:
      return state;
  }
};
