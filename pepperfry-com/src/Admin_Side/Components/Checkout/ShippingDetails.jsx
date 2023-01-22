import React from 'react'
import { BillingDetailContainer, BillingDetals, ShipingDetals } from './CheckoutCSS';
import { useSelector } from "react-redux";

 

const ShippingDetails = () => {

   const { shippingInfo } = useSelector((state) => state.cart);
   const address = shippingInfo;

  return (
    <BillingDetailContainer>
      <ShipingDetals>
        <div className="heading">SHIPPING DETAILS</div>
        <div className="detals">
          <div>{address.name.toUpperCase()}</div>
          <div>{address.address}</div>
          <div>
            {address.city} - {address.pincode}
          </div>
          <div>{address.state}</div>
          <div>M: {address.phoneNo}</div>
        </div>
      </ShipingDetals>

      <BillingDetals>
        <div className="heading"> BILLING DETAILS</div>
        <div className="detals">
          <div>{address.name.toUpperCase()}</div>
          <div>{address.address}</div>
          <div>
            {address.city} - {address.pincode}
          </div>
          <div>{address.state}</div>
          <div>M: {address.phoneNo}</div>
        </div>
      </BillingDetals>
    </BillingDetailContainer>
  );
}

export { ShippingDetails }