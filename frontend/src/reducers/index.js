import { combineReducers } from 'redux';
import cart from './cart';
import order from './order';
import user from './user';
export default combineReducers({
  cart: cart,
  order: order,
  user: user,
});
