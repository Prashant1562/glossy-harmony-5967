
import { Checkbox } from '@mui/material';
import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar';
import  OrderSummery  from '../OrderSummeryCard/OrderSummery';
import PaymentMethodCard from '../PaymentMethodCard/PaymentMethod';
import  Price  from '../PriceCard/Price';
import { CheckBoxDiv, Emi } from '../PriceCard/PriceCSS';
import { AdressContainer,  LeftDiv,  PriceDiv,  RightDiv } from './AddressCSS';
import {AddressInput} from './AddressInput'


const MainAddress = () => {
  return (
    <>
     <CheckoutNavbar />
    <AdressContainer>
      <LeftDiv>
        <OrderSummery />
        <AddressInput />
        <PaymentMethodCard />
      </LeftDiv>

      <RightDiv>
        <PriceDiv>
          <Price />
        </PriceDiv>

        <Emi>
          <p>
            No Cost EMI Available starting <span>₹ 2,316/month.</span> EMI
            Starting <span> ₹ 655/month </span>
          </p>
        </Emi>

        <CheckBoxDiv className="chekboxAddress">
          <Checkbox /> Contribute Rs.99 For COVID Relief Through GiveIndia.
        </CheckBoxDiv>
      </RightDiv>
    </AdressContainer>

    <CheckoutFooter/>
    </>
  );
}

export { MainAddress }