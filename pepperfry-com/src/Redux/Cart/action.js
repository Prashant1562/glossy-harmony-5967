import axios from "axios";
import { ADDRESS_INFO_SAVE, ADD_TO_CART, REMOVE_CART_ITEM } from "./actionType";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://pepperfry-website-api.onrender.com/addtocart/${id}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product.id,
      name: data.product.name,
      price: data.product.lowprice,
      image: data.product.img1,
      stock: data.product.rating,
      discount: data.product.highprice,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: ADDRESS_INFO_SAVE,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
