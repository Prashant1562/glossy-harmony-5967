import React from 'react'
import { CopyRight, Flex, FooterHeader, FooterText, FooterWrapperC, Grid, Img2, Wallet } from './CheckoutFooterCSS';

const CheckoutFooter = () => {
  return (
    <FooterWrapperC>
      <div>
        <FooterHeader> WE ACCEPT </FooterHeader>
        <Flex>
          <div>
            <img
              src="https://ii2.pepperfry.com/images/new-visa-logo.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://ii2.pepperfry.com/images/american-express-icon.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://ii2.pepperfry.com/images/d-i-n-e-r-s-c-a-r-d-1.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://ii2.pepperfry.com/images/mastercard-logo-png.png"
              alt=""
            />
          </div>

          <Wallet>
            <div>
              <img
                src="https://ii2.pepperfry.com/images/982-wallet.png"
                alt=""
              />
            </div>
            <FooterText>Wallet</FooterText>
          </Wallet>

          <Wallet>
            <div>
              <img
                src="https://ii2.pepperfry.com/images/985-netbanking.png"
                alt=""
              />
            </div>
            <FooterText>Internet banking</FooterText>
          </Wallet>
        </Flex>
      </div>

      <div>
        <FooterHeader> BUY SAFE, PAY EASY </FooterHeader>

        <Flex>
          <Grid>
            <img
              src="https://ii1.pepperfry.com/images/svg/calendar-1.svg"
              alt=""
            />
            <div>
              <span>No Cost EMIs: </span> Now pay in easy installments at no
              additional cost
            </div>
          </Grid>
          <CopyRight>
            Copyright 2021 Pepperfry.com. All rights Reserved.
          </CopyRight>
        </Flex>
      </div>

      <div>
        <FooterHeader>100% SAFE & SECURE</FooterHeader>
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
    </FooterWrapperC>
  );
}

export { CheckoutFooter }