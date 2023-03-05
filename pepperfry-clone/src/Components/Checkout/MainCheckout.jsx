import { Checkbox } from '@mui/material';
import React from 'react'
import { CheckBoxDiv, Emi } from '../Cart/CartCSS';
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { Flex } from '../CheckoutFooter/CheckoutFooterCSS';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { PaymentsCard } from '../PaymentMethodCard/PaymentCard';
import { ChekoutContainer, LeftDiv} from './CheckoutCSS';
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

        
      </ChekoutContainer>

     
      <CheckoutFooter />
     
    </div>
  );
}

export { MainCheckout }