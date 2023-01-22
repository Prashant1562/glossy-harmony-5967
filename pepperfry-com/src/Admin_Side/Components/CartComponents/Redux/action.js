import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionType"

const proRequestAction=()=>{
    return {type:GET_PRODUCT_REQUEST}
}

const proSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const proFailureAction=()=>{
    return {type:GET_PRODUCT_FAILURE}
}

const postRequestAction=()=>{
    return {type:POST_PRODUCT_REQUEST}
}

const postSuccessAction=(payload)=>{
    return {type:POST_PRODUCT_SUCCESS,payload}
}

const postFailureAction=()=>{
    return {type:POST_PRODUCT_FAILURE}
}


const delSuccessAction=(payload)=>{
    return {type:DELETE_PRODUCT_SUCCESS,payload}
}



export {proRequestAction,proSuccessAction,proFailureAction,delSuccessAction,postRequestAction,postFailureAction,postSuccessAction}