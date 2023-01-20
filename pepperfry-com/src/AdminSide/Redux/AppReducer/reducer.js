import * as types from "./actionTypes";

export const initState = {
    sofas: [],
    isLoading: false,
    isError: false
}

// action = { type, payload }

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
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
        default:
            return state;
    }
}