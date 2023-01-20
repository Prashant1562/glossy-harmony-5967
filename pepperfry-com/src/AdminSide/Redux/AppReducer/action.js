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

