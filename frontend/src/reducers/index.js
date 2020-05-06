import { combineReducers } from 'redux';
import userCartReducer from './userCartReducer';
import userOrdersReducer from './userOrdersReducer';
import userLoginReducer from './userLoginReducer.js'
export default combineReducers({
    cart: userCartReducer,
    orders: userOrdersReducer,
    login: userLoginReducer,
});
