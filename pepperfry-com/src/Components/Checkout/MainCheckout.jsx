import { Checkbox } from '@mui/material';
import React from 'react'
import { CheckBoxDiv, Emi } from '../Cart/CartCSS';
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { Flex } from '../CheckoutFooter/CheckoutFooterCSS';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import  OrderSummery  from '../OrderSummeryCard/OrderSummery';
import { PaymentsCard } from '../PaymentMethodCard/PaymentCard';

import  Price  from '../PriceCard/Price';
import { BankOffer, ChekoutContainer, LeftDiv, PriceDiv, RightDiv, Secur } from './CheckoutCSS';
import { ShippingDetails } from './ShippingDetails';

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const MainCheckout = () => {
  return (
    <div>
      <CheckoutNavbar />

      <ChekoutContainer>
        <LeftDiv>
          <OrderSummery />
          <ShippingDetails />

            <Accordion>
              <AccordionSummary
              className='PaymentAcordion'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How Would you Like To Pay</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <PaymentsCard />
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* <div>PAYMENT</div>
            <div>
              <div>
                <img src={plus} alt="plusIcon" />
              </div>
            </div> */}
      
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

          <BankOffer>BANK OFFERS</BankOffer>

          <div>
            <Secur>100% SAFE & SECURE</Secur>
            <Flex>
              <div>
                <img
                  src="https://ii2.pepperfry.com/images/download-1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://ii2.pepperfry.com/images/p-c-i-d-s-s.png"
                  alt=""
                />
              </div>
            </Flex>
          </div>
        </RightDiv>
      </ChekoutContainer>

     
      <CheckoutFooter />
    </div>
  );
}

export { MainCheckout }