import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
//import MainProductList from '../Components/ProductList/MainProductList';
import { MainAddress } from "../Components/Address/MainAddress";
import Success from '../Components/SucessPage/Success';
import CardPayment from '../Components/CardPayment/CardPayment';
import Signup from '../Components/Signup/Signup/Signup';
import Login from "../Components/Signup/Login_copy/Login"
import ProductPage from '../Components/ProductPage/ProductPage';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        {/* <Route path="/productlist" element={<MainProductList />} /> */}
        <Route path="/productlist" element={<ProductPage />} />
        <Route path="/product/:id" element={<MainProductDetail />} />
        <Route path="/address" element={<MainAddress />} />
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/paymentdone" element={<Success />} />
      </Routes>
    </div>
  );
}

export { Routing }
