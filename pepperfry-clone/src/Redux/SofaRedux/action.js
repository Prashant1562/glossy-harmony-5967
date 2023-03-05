import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"


export const getdataRequest = () =>{
    return {type : GET_DATA_REQUEST}
}

export const getdataSuccess = (payload) =>{
    return {type : GET_DATA_SUCCESS, payload}
}

export const getdataFailure = () =>{
    return {type : GET_DATA_FAILURE}
}