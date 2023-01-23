import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "../../style/detail.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../Redux/ProductDetails/action' 
import axios from "axios";
import { Slider } from "./Slider";
import { addItemsToCart } from "../../Redux/Cart/action"



export const MainProductDetail = () =>{
  // const { id } = useParams();
  //  const { product, loading, error } = useSelector((state) => state. productDetails);
  //  const dispatch = useDispatch();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="detail">
        <div className="img">
          {cart &&
            cart.map((item, i) =>
            <div>
              {/* <Slider cart={item.img[0]} /> */}
              <img src={item.img1} alt="adad" style={{width:"450px"}}/>
              <div className="div">
              <img src={item.img2} alt="adad" style={{width:"150px"}}/>
              <img src={item.img3} alt="adad" style={{width:"150px"}}/>
              <img src={item.img4} alt="adad" style={{width:"150px"}}/>
              </div>
             
              <div className="data">
          <div className="product-name">
          <h2>{item.name}</h2>
            <FavoriteBorderOutlined className="heart" />
            
          </div>
          <h4 className="company">{cart.name}</h4>
          <h2 style={{color:"orange"}}>{item.brand}</h2>
          <br />
          <h6>36 Month's Warranty</h6>
          <br />
          <h1>
            ₹
            {Math.round(
              item.lowprice -
                (item.lowprice * item.highprice) / 100
            )}
          </h1>
          <h5>
            Save ₹
            {item.lowprice -
              Math.round(
                item.lowprice -
                  (item.lowprice * item.highprice) / 100
              )}
          </h5>
          <div className="line"></div>
          <br />
          <h4>
            Last Day to <a href="">Earn Cashback upto 5%</a>
          </h4>

          <a href="">EMI option</a>
          <br />
          <br />
          <img
            className="offer"
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_05042022_nd.jpg"
            alt=""
          />
          <br />
          <br />
          <label htmlFor="">
            DELIVERY &emsp; &emsp; &emsp; &emsp;Enter Pincode to get Delivery
            Date, Assembly Information and other details
          </label>
          <h6></h6>
          <br />
          {/* <input
            type="number"
            placeholder="Enter a Pincode"
            value={pincode}
            onChange={(e) => handlerChange(e)}
            className="pincode"
          /> */}
          <button className="pinBtn">APPLY</button>
          <br />
          <br />
          <h4 className="del">
            Delivery charges as applicable <b>Pincode Required</b>
          </h4>
          <h4 className="del">
            Assembly Charges as applicable <b>Pincode Required</b>
          </h4>
          <br />
          <div className="button">
            <button className="add">
              ADD TO CART
            </button>

            <Link to={`/checkout`}>
              <button className="buy">BUY NOW</button>
            </Link>
          </div>
        </div>
            </div> )}
           
        </div>
        
      </div>
      {/* <Footer /> */}
    </>
  );
}