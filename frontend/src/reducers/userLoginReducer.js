import {
  USER_SET_LOGIN,
  USER_SET_PASSWORD,
  USER_SET_EMAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case USER_SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};
