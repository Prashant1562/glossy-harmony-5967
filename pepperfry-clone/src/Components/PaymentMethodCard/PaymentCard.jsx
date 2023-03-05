

import debit from "../../Images/PaymentIcons/debit.svg";
// import credit from "../../Images/PaymentIcons/credit.svg";
import NetBank from "../../Images/PaymentIcons/internetBanking.svg";
import GiftCard from "../../Images/PaymentIcons/giftcard.svg";
import UPI from "../../Images/upi.svg";
import Wallet from "../../Images/PaymentIcons/wallet.svg";
import International from "../../Images/PaymentIcons/international.svg";
import EMI from "../../Images/PaymentIcons/emi.svg";
import Money from "../../Images/PaymentIcons/money.svg";
import { PaymentCardContainer, PaymentCardParent, PaymentDiv } from "./PaymentMethodCSS";
import { Payment } from "./Payment";



export const PaymentsCard = () => {

  return (
    <PaymentCardContainer>
      <div className="heading">
        <div>SELECT PAYMENT METHOD</div>
      </div>
      <PaymentDiv>
        
        <PaymentCardParent>
          <button className="patmentBox">
            <img src={debit} alt="" />
            <div>ATM/DEBIT CARD</div>
          </button>

          <button className="patmentBox">
            <img src={Money} alt="" />
            <div>CARDLESS EMI/PAYLATER</div>
          </button>

          <button className="patmentBox">
            <img src={debit} alt="" />
            <div>CREDIT card</div>
          </button>

          <button className="patmentBox">
            <img src={EMI} alt="" />
            <div>EMI</div>
          </button>

          <button className="patmentBox">
            <img src={NetBank} alt="" />
            <div>INTERNET BANKING</div>
          </button>

          <button className="patmentBox">
            <img src={GiftCard} alt="" />
            <div>PEPPERFRY GIFT CARD</div>
          </button>

          <button className="patmentBox">
            <img src={UPI} alt="" />
            <div>GOOGLE PAY/UPI</div>
          </button>

          <button className="patmentBox">
            <img src={Wallet} alt="" />
            <div>WALLET</div>
          </button>

          <button className="patmentBox">
            <img src={International} alt="" />
            <div>INTERNATIONAL CARDS</div>
          </button>
        </PaymentCardParent>
        
        <Payment />
      </PaymentDiv>
    </PaymentCardContainer>
  );
};
