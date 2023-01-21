import * as types from "./actionTypes";

export const initState = {
    sofas: [],
    addToCart: [],
    isLoading: false,
    isError: false
}

// action = { type, payload }

export const reducer = (state = initState, { type, payload }) => {
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