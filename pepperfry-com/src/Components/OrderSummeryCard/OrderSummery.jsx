import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import plus from '../../Images/plus.svg'
import { OrderContainer } from './OrderSummeryCSS';

const OrderSummery = () => {
  // const { shippingInfo } = useSelector((state) => state.cart);
  //  const { cartItems } = useSelector((state) => state.cart);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  

  return (
    <>
      <OrderContainer>
        <div>ORDER SUMMARY</div>
        <div>
          <div>
            ({cart.length} items) <img src={plus} alt="plusIcon" />
          </div>
        </div>
      </OrderContainer>
    </>
  );
}




export default OrderSummery
