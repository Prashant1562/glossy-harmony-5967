import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import CartPage from './CartPage';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { EmptyCart } from "./CartCSS";



const MainCart = () => {
    const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <CheckoutNavbar />

      {cartItems.length === 0 ? (
        <EmptyCart>
          <RemoveShoppingCartIcon className="icon" /> <br />
          <h2>No Product in Your Cart</h2> <br />
          <Link to="/productlist">
            <span> View Products </span>
          </Link>
        </EmptyCart>
      ) : (
        <CartPage />
      )}
      <CheckoutFooter />
    </div>
  );
}



export { MainCart }