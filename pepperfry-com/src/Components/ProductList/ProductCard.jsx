import React from "react";
import "../../style/product.css"
import { Button, CardWrapper } from "./ProductListCSS";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../Redux/Cart/action";


const ProductCard = ({ product }) => {

   const dispatch = useDispatch();
  
const options = {
  value: product.ratings,
  readOnly: true,
  precision: 0.5,
};

const addToCartHandler = () => {
  dispatch(addItemsToCart(product._id,1));
};

  return (
    <CardWrapper>
      <Link to={`/product/${product._id}`}>
        <img src={product.img1} alt="productImage" />
      </Link>
      <Button onClick={addToCartHandler}>ADD TO CART</Button>
      <div>
        <Rating {...options} className="ratings" />{" "}
        <span className="count">({product.rating})</span>
      </div>

      <h4>{product.description}</h4>
      <h5 className="card-brand">{product.name}</h5>
      <h4 className="card-price">
        ₹
        {Math.round(
          product.price - (product.price * product.discount_percentage) / 100
        )}
        <span className="card-original-price"> ₹{product.price}</span>
      </h4>
      <h4 className="card-savings">{product.discount_percentage}% Off</h4>
      <h6>Ships in 1 day</h6>
    </CardWrapper>
  );
};


export default ProductCard;






