import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./ProductCard.module.css";


const ProductCard = ({id, name,brand, img1, img2, img3, img4,highprice, lowprice,rating}) => {
  const navigate = useNavigate();
  const percentageOff = Math.floor(100 - ((lowprice / highprice) * 100));
  return (
    <div className={styles.product_card_container} onClick={() => navigate(`/sofas/${id}`)}>
      <div className={styles.product_card_image}>
        <img width="100%" src={img1} alt={name} />
        <p>Rating: {rating}</p>
        </div>
        <p>Make a Set</p>
            <div className={styles.product_multiple_images}>
                <img src={img2} alt="sofas-image-2" />
                <img src={img3} alt="sofas-image-3" />
                <img src={img4} alt="sofas-image-4" />
            </div>
            <p className={styles.product_item_name}>{name}</p>
            <p className={styles.product_item_brand}>{brand}</p>
            <div>
                <span className={styles.product_item_lowprice}>₹ {lowprice}</span>{" "}
                <span className={styles.product_item_highprice}><s>₹ {highprice}</s></span>
            </div>
            <div className={styles.product_item_percentage}>
                {percentageOff}% Off
            </div>
            <p className={styles.product_item_shipment}>Ships in <span className={styles.shipment_day}>1 day</span></p>
    </div>
  )
}

export default ProductCard