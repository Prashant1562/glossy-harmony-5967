import * as types from "./actionType";
import axios from "axios";

// export const getProductDetails = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_DETAILS_REQUEST,
//     });

//     const { data } = await axios.get(
//       `https://pepperfry-website-api.onrender.com/addtocart`
//     );
//       console.log("cart")
//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

export const getProductDetails = (params) => (dispatch) => {
  dispatch({ type: types.PRODUCT_DETAILS_REQUEST });
   axios
      .get(`https://pepperfry-website-api.onrender.com/addtocart`, params)
      .then((res) => {
        console.log(res.data)
          dispatch({ type: types.PRODUCT_DETAILS_SUCCESS, payload: res.data })
      })
      .catch((error) => {
          dispatch({ type: types.PRODUCT_DETAILS_FAIL })
      })
}