import { combineReducers } from 'redux';
import userCartReducer from './userCartReducer';
import userOrdersReducer from './userOrdersReducer';

export default combineReducers({
    cart: userCartReducer,
    orders: userOrdersReducer,
});
