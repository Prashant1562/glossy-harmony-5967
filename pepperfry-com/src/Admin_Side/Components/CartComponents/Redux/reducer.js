import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionType";


export const reducer=(state,{type,payload})=>{
    switch (type) {
        case GET_PRODUCT_REQUEST:
            
           return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,product:[...payload]}
        case GET_PRODUCT_FAILURE:
            return {...state,isError:true}
        case POST_PRODUCT_REQUEST:
            
            return {...state,isLoading:true}
        case POST_PRODUCT_SUCCESS:
             return {...state,isLoading:false,product:[...state.product,payload]}
        case POST_PRODUCT_FAILURE:
             return {...state,isError:true}
        case DELETE_PRODUCT_SUCCESS:
             return {...state,product:state.product.filter((el)=>el.id!==payload)}
        
        default:
            return state;
    }
}