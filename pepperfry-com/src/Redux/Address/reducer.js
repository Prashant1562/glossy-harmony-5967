import { ADDRESS_INFO_SAVE } from "./actionTypes";

export const addressReducer = (state = { addressInfo: {} }, action) => {
  switch (action.type) {
    case ADDRESS_INFO_SAVE:
      return {
        ...state,
        addressInfo : action.payload,
      };

    default:
      return state;
  }
};
