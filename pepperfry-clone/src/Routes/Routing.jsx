import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from '../Components/ProductPage';
import SingleProduct from '../Components/SingleProduct';
import Cart from "../Components/Cart"
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import CardPayment from '../Components/CardPayment/CardPayment';
import Success from '../Components/SucessPage/Success';


const Routing = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sofas" element={<ProductPage />} />
            <Route path='/sofas/:id' element={<SingleProduct />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<MainCheckout />} /> 
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/paymentdone" element={<Success />} />
        </Routes>
      </div>
    );
  }
  
  export { Routing }
  