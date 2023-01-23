// import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {productReducer} from "./Product/product_reducer";
// import productDetailsReducer from "./ProductDetails/reducer.js";
// import { addressReducer } from "./Address/reducer.js";
// import { loginReducer } from "./Login/reducer.js";
// import { cartReducer } from "./Cart/reducer.js";

import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
 import {reducer} from "./AppReducer/reducer";
// import { productReducer } from "./Product/product_reducer";


// const rootReducer = combineReducers({
//   products: productReducer,
//   productDetails : productDetailsReducer,
//   login : loginReducer,
//   cart : cartReducer,
//   address : addressReducer,
//   user : loginReducer,
// });

// let initialState = {
//   cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
// };

//  const middleware = [thunk];


// const store = legacy_createStore(
//   rootReducer,
//     initialState,
// applyMiddleware(...middleware)
// );

// export { store };


const store = legacy_createStore(reducer, applyMiddleware(thunk));

export {store}