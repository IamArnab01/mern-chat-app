import {
  SET_CURRENT_USER,
  USER_LOADED,
  USER_LOADING,
  SET_LOADED,
  SET_LOADING,
} from "../types";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default authReducer;
