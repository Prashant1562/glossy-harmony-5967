import React,{useEffect,useState} from 'react'
import { CardContainer, CardIcon, CardLeft, CardMid, CardRight, Orange } from "./CartCSS";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BsLayers } from "react-icons/bs";
import {Flex} from '../../Utils/Common'
import safe from '../../Images/safe.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from "../../Redux/Cart/action";





const CartCards = () => {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  
  // const dispatch = useDispatch();
  // const { cartItems } = useSelector((state) => state.cart);


  // const increaseQuantity = (id, quantity, stock) => {
  //   const newQty = quantity + 1;
  //   if (stock <= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty));
  // };

  // const decreaseQuantity = (id, quantity) => {
  //   const newQty = quantity - 1;
  //   if (1 >= quantity) {
  //     return;
  //   }
  //   dispatch(addItemsToCart(id, newQty));
  // };

  // const deleteCartItems = (id) => {
  //   dispatch(removeItemsFromCart(id));
  // };

  
 
  
  return (
    <div>
      {cart &&
        cart.map((item) => (
          <CardContainer>
            <CardLeft>
              <img src={item.img1} alt="" />
              <div> only {item.brand} left</div>
            </CardLeft>

            <CardMid>
              <p className="name">{item.name}</p>
              <p>
                <Orange className="month">
                  12 Months' Warranty, 100% Genuine
                </Orange>
              </p>

              <div className="spanItem">
                <div className="flexset">
                  <CalendarMonthIcon className="calenderIcon" />
                  <span> Delivery By</span>
                </div>
                <p>Tue, 26 Apr</p>
                <p>Charges FREE For Today</p>
              </div>
              <br />

              <div className="spanItem">
                <div className="flexset">
                  <BsLayers className="calenderIcon" />
                  <span>Assembly</span>
                </div>
                <p>Offered By Pepperfry</p>
                <p>Charges ₹ 449 </p>
              </div>

              <br />
              <div>
                <Flex>
                  <img className="Safeitemsimg" src={safe} alt="" />
                  <div className="Safeitems">
                    <Orange> Full Furniture Protection </Orange>
                    <p>For Only ₹ 1,834</p>
                    <p>Learn More?</p>
                  </div>
                </Flex>
              </div>
            </CardMid>

            <CardRight>
              <Flex>
                <button
                  // onClick={() => decreaseQuantity(item.product, item.quantity)}
                >
                  -
                </button>
                <input
                  className="quantity"
                  type="number"
                  value={item.quantity}
                  readOnly
                />
                <button
                  // onClick={() =>
                  //   // increaseQuantity(item.product, item.quantity, item.stock)
                  // }
                >
                  +
                </button>
              </Flex>

              <div className="qprice"> ₹ {item.price}</div>
              <Orange>
                ₹
                {Math.round(
                  item.price -
                    (item.price * item.discount) / 100
                )}
              </Orange>

              <div className="add">+ Add</div>
            </CardRight>

            <CardIcon>
              <span>
                {/* <DeleteIcon onClick={() => deleteCartItems(item.product)} /> */}
              </span>

              <span>
                <FavoriteBorderIcon />
              </span>
            </CardIcon>
          </CardContainer>
        ))}
    </div>
  );
};




export default  CartCards


