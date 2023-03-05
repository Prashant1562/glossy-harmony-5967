import React from 'react'
import { BillingDetailContainer, BillingDetals, ShipingDetals } from './CheckoutCSS';
import { useSelector } from "react-redux";

 

const ShippingDetails = () => {

  //  const { shippingInfo } = useSelector((state) => state.cart);
  //  const address = shippingInfo;

  return (
    <BillingDetailContainer>
      <ShipingDetals>
        <div className="heading">SHIPPING DETAILS</div>
        <div className="detals">
          <div>
            <p>Aditi</p>
          </div>
          <div>{<p>A-44, Rohini, India</p>}</div>
          <div>
          {<p>Delhi City</p>}
          </div>
          <div>{<p>Ambedkar Chowk</p>}</div>
          <div>{<p>M: 9907551562</p>}</div>
        </div>
      </ShipingDetals>

      <BillingDetals>
        <div className="heading"> BILLING DETAILS</div>
        <div className="detals">
          <div>{<p>Aditi</p>}</div>
          <div>{<p>A-44, Rohini, India</p>}</div>
          <div>
          {<p>Delhi City</p>}
          </div>
          <div>{<p>Ambedkar Chowk</p>}</div>
          <div>{<p>M: 9907551562</p>}</div>
        </div>
      </BillingDetals>
    </BillingDetailContainer>
  );
}

export { ShippingDetails }