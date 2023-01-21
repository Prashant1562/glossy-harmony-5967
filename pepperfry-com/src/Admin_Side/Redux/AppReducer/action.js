import axios from "axios"
import * as types from "./actionTypes";

export const getData = (params) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });

    return axios
        .get(`http://localhost:8080/sofas`, params)
        .then((res) => {
            dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: types.GET_DATA_FAILURE })
        })
}

export const addToCart = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_TO_CART_REQUEST });

    return axios
        .post(`http://localhost:8080/addtocart`, payload)
        .then((res) => {
            dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: types.ADD_TO_CART_FAILURE })
        })
}