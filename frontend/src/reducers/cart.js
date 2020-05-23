import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR } from '../actions/types';

const INITIAL_STATE = {
  totalPrice: 0.00,
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        totalPrice: state.totalPrice + action.item.price * action.item.quantity,
        items: [
          ...state.items,
          action.item,
        ],
      };
    case CART_REMOVE_ITEM:
      const item = state.items.find((item) => item.productId == action.productId);
      return {
        ...state,
        totalPrice: state.totalPrice + item.price * item.quantity,
        items: state.items.filter((item) => item.productId !== action.productId),
      };
    case CART_CLEAR:
      return {
        ...state,
        totalPrice: INITIAL_STATE.totalPrice,
        items: INITIAL_STATE.items,
      };
    default:
      return state;
  }
};
