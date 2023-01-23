import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_USER_REQUEST, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "./actionType";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
      // case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
      // case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    // case LOGOUT_SUCCESS:
    //   return {
    //     loading: false,
    //     user: null,
    //     isAuthenticated: false,
    //   };

    case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    // case LOAD_USER_FAIL:
    //   return {
    //     loading: false,
    //     isAuthenticated: false,
    //     user: null,
    //     error: action.payload,
    //   };

    // case LOGOUT_FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};
