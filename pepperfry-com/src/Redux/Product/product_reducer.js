
// import {ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS,} from './product_types'

// const productReducer = (state = { products : [] }, action) => {
//   switch (action.type) {
//     case ALL_PRODUCT_REQUEST:
//       return {
//         loading: true,
//         products: [],
//       };

//     case ALL_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         products: action.payload.products,
//         productsCount: action.payload.productsCount,
//         resultPerPage: action.payload.resultPerPage,
//       };

//     case ALL_PRODUCT_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };

// export default productReducer;


import * as types from "./product_types";

export const initState = {
    sofas: [],
    addToCart: [],
    isLoading: false,
    isError: false
}

// action = { type, payload }

export const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
        // GET PRODUCT DATA FROM SERVER
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sofas: payload
            }
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // POST ADD TO CART DATA ON SERVER
        case types.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addToCart: [...state.addToCart, payload]
            }
        default:
            return state;
    }
}