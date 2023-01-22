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
  const { id } = useParams();
   const { product, loading, error } = useSelector((state) => state. productDetails);
   const dispatch = useDispatch();

  //   const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   getData()
  // },[])

  //  const getData = async() => {
  //    const { data } = await axios.get(`/api/v1/product/${id}`);
  //      setProduct(data.product);
  //  }

  //    console.log(product.images)


  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  const [pincode, setPincode] = React.useState("");
  const handlerChange = (e) => {
    setPincode(e.target.value);
  };

  
  const addToCartHandler = () => {
    dispatch(addItemsToCart (id,1));
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="detail">
        <div className="img">
          {product.images &&
            product.images.map((item, i) => <Slider img={item.url} />)}
        </div>
        <div className="data">
          <div className="product-name">
            <h2>{product.description}</h2>
            <FavoriteBorderOutlined className="heart" />
          </div>
          <h4 className="company">{product.name}</h4>
          <br />
          <h6>36 Month's Warranty</h6>
          <br />
          <h1>
            ₹
            {Math.round(
              product.price -
                (product.price * product.discount_percentage) / 100
            )}
          </h1>
          <h5>
            Save ₹
            {product.price -
              Math.round(
                product.price -
                  (product.price * product.discount_percentage) / 100
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
          <input
            type="number"
            placeholder="Enter a Pincode"
            value={pincode}
            onChange={(e) => handlerChange(e)}
            className="pincode"
          />
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
            <button className="add" onClick={addToCartHandler}>
              ADD TO CART
            </button>

            <Link to={`/cart`}>
              <button className="buy">BUY NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

