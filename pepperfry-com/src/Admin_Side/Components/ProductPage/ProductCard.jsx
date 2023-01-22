import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/AppReducer/action";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const { id, img1, img2, img3, img4, name, brand, lowprice, highprice, rating } = props;

    const percentageOff = Math.floor(100 - ((lowprice / highprice) * 100));

    const handleClick = () => {
        dispatch(addToCart(props)).then(() => {
        })
        .catch(() => {
            alert("product already added into the cart")
        })
    }

    return (
        <div className={styles.product_card_container}>
            <div className={styles.product_card_image}>
                <img src={img1} alt={name} />
                <p>Rating: {rating}</p>
                <button onClick={handleClick}>Add To Cart</button>
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

export default ProductCard;