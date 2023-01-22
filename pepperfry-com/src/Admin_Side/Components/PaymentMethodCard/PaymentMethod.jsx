import React from 'react'
import { PaymetMethodContainer } from './PaymentMethodCSS';
import plus from "../../Images/plus.svg";
import minus from "../../Images/minus.svg";

function PaymentMethodCard() {
  return (
    <PaymetMethodContainer>
      <div>PAYMENT</div>
      <div>
        <div>
          How Would you Like To Pay <img src={plus} alt="plusIcon" />
        </div>
      </div>
    </PaymetMethodContainer>
  );
}

export default PaymentMethodCard