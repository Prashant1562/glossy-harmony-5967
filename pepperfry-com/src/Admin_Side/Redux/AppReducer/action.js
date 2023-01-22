import axios from "axios"
import * as types from "./actionTypes";

export const getData = (params) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });

    return axios
        .get(`https://pepperfry-website-api.onrender.com/sofas`, params)
        .then((res) => {
            console.log("success:",res.data)
            dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            console.log('error')
            dispatch({ type: types.GET_DATA_FAILURE })
        })
}

export const addToCart = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_TO_CART_REQUEST });

    return axios
        .post(`https://pepperfry-website-api.onrender.com/addtocart`, payload)
        .then((res) => {
            console.log("cart:",res.data)
            dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: types.ADD_TO_CART_FAILURE })
        })
}
