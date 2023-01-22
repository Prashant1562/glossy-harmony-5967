import React, {useState, useEffect} from "react";
import styles from "./CardPayment.module.css"
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Checkbox from "@mui/material/Checkbox"
import {Link} from 'react-router-dom';
 import {useSelector} from "react-redux";
import logo from "../../Images/logo.png";

function CardPayment(){

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
      discount += Math.round((el.price * el.discount) / 100);
    });

    console.log(price, discount);

    let totalPrice = price - discount;

    // console.log(withoutOfferprice, totalPrice, totaldiscount);

    setTotalItem(items);
    setPrice(price);
    setDiscount(discount);
    setTotalPrice(totalPrice + 99 + 1500);
  }, [cartItems]);



    return (
      <div className={styles.wrapperDiv}>
        <div className={styles.maindiv}>
          <div className={styles.leftDiv}>
            <div className={styles.leftDiv1}>
              <Link to="">
                {/* LINK THE BACK ARROW TO THE PREVIOUS BACK HERE */}
                <div className={styles.leftDiv11}>
                  <ArrowBackOutlinedIcon className={styles.lefrarrow} />
                  <p className={styles.left11p}>BACK</p>
                </div>
              </Link>
              <img
                src={logo}
                alt="pepperfrylogo"
                className={styles.leftDiv12img}
              />
            </div>
            <div>
              <div className={styles.leftDiv2}>
                <p className={styles.leftDiv2p}>Enter new card</p>
              </div>
              <div className={styles.leftDiv3}>
                <p className={styles.leftDiv3p}>
                  Total Payable Amount <span>₹ {totalPrice} </span>{" "}
                  {/* ADD TOTAL AMOUNT HERE IN THE SPAN */}
                </p>
              </div>
              <div className={styles.leftDiv4}>
                <p className={styles.leftDiv4p}>Transaction ID: 308068478</p>
              </div>
            </div>
          </div>

          <div className={styles.rightDiv}>
            <div className={styles.rightDiv1}>
              <p className={styles.rightDiv1p}>CARDS (CREDIT/DEBIT)</p>
            </div>
            <div className={styles.rightDiv2}>
              <div className={styles.formwrapper}>
                <form className={styles.form1}>
                  <label>New Card</label>
                  <input
                    type="number"
                    required
                    placeholder="Enter Card Number"
                    min={1000000000000000}
                    max={9999999999999999}
                    className={styles.formInputdiv}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                    }}
                  >
                    <div className={styles.cvvandExpiryDiv}>
                      <label>Expiry</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        className={styles.formexpiry}
                      />
                    </div>
                    <div className={styles.cvvandExpiryDiv}>
                      <label>CVV</label>
                      <input
                        type="password"
                        required
                        placeholder="Enter CVV"
                        maxLength={3}
                        className={styles.formexpiry}
                      />
                    </div>
                  </div>
                  <label>Name On Card</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Name as on Card"
                    className={styles.formInputdiv}
                  />
                  <div className={styles.checKboxdiv}>
                    <Checkbox color="secondary" />
                    Secure this option for faster checkouts
                  </div>
                  <Link to="/paymentdone">
                    <button type="submit" className={styles.proceedbtn}>
                      PROCEED
                    </button>
                  </Link>
                  {/* LINK THIS TO THE NEXT PAGE AFTER CLICKING ON PROCEED BUTTON*/}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardPayment;