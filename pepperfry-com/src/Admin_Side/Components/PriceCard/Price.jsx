import { Grid } from "../../Utils/Common.js";
import React,{useEffect,useState} from "react";
import {
  Blue,
  Green,
  Orange,
  PriceContainer,
  PriceWraper,
  TotalPrice,
  Hr,
  PriceDiv,
} from "./PriceCSS";
 import { useSelector } from "react-redux";



const Price = ({cart}) => {
  
  const { cartItems } = useSelector((state) => state.cart);
  
    const [price, setPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      let items = 0;
      let price = 0;
      let discount = 0;
      let quantity = 0;

      cartItems.forEach((el) => {
        price += el.price * el.quantity;
        discount += Math.round(el.price * el.discount / 100)
      });

          console.log(price,discount);

  
      let totalPrice = price - discount;

     // console.log(withoutOfferprice, totalPrice, totaldiscount);

      setTotalItem(items);
      setPrice(price);
      setDiscount(discount);
      setTotalPrice(totalPrice + 99 + 1500);
    }, [cartItems]);




  return (
    <PriceDiv>
      <PriceWraper>
        <PriceContainer>
          <div>
            <div className="cardDisplay">
              <div>Cart Value</div>
              <div>₹ {price}</div>
            </div>

            <div className="cardDisplay">
              <Green>Retail Discount </Green>
              <Green>(-) ₹ {discount}</Green>
            </div>

            <div className="cardDisplay">
              <Blue>Cashback/Refund Credits Redeemed</Blue>
              <Blue>(-) ₹{0}</Blue>
            </div>

            <div className="cardDisplay">
              <div>
                Delivery <Orange> (FREE) </Orange>
              </div>
              <div> ₹ 0 </div>
            </div>

            <div className="cardDisplay">
              <div>Assembly</div>
              <div>₹ 1500</div>
            </div>

            <div className="cardDisplay">
              <div>GiveIndia</div>
              <div>₹ 99</div>
            </div>
          </div>

          <Hr />

          <TotalPrice>
            <div className="total"> Total</div>
            <div>
              <div className="totalPrice">₹ {totalPrice}</div>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
          </TotalPrice>

          <Hr />
        </PriceContainer>
      </PriceWraper>
    </PriceDiv>
  );
};


export default Price;
