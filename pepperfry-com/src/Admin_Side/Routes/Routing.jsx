import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
//import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
//import MainProductList from '../Components/ProductList/MainProductList';
import ProductPage from "../Components/ProductPage/ProductPage";
import { MainAddress } from "../Components/Address/MainAddress";
import Popup from "../Components/Login/Popup"
import Success from '../Components/SucessPage/Success';
import CardPayment from '../Components/CardPayment/CardPayment';
// import Drawer1 from '../Components/CartItem/Drawer1';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Drawer1 />} /> */}
        {/* <Route path="/productlist" element={<MainProductList />} /> */}
        <Route path="/productlist" element={<ProductPage />} />
        <Route path="/product/:id" element={<MainProductDetail />} />
        <Route path="/address" element={<MainAddress />} />
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/login" element={<Popup />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/paymentdone" element={<Success />} />
      </Routes>
    </div>
  );
}

export { Routing }