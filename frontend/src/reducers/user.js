import {
  USER_SET_ISLOGGEDIN,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SET_ISLOGGEDIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};
