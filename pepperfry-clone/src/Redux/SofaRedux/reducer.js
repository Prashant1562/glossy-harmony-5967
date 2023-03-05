import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"


const initialstate = {
    sofadata : [],
    isLoading : false,
    isError : false,
}

export const reducer = (state=initialstate, {type,payload}) =>{
    switch(type){
        case GET_DATA_REQUEST :
            return {...state, isLoading:true}
        case GET_DATA_SUCCESS :
            return {...state, isLoading:false, sofadata:payload}
        case GET_DATA_FAILURE :
            return {...state, isLoading:false, isError : true}    
        default :
           return state;
    }
}