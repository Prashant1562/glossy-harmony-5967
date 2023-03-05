import styled from 'styled-components'

 export const ChekoutContainer = styled.div`
   width: 85%;
   margin: auto;
   margin-top: 120px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   .chekboxAddress {
     font-size: 12px;
     padding: 2px;
     color: #969696;
     font-weight: 500;
   }
 `;

 export const LeftDiv = styled.div`
   width: 66%;
   border: 1px solid lightgray;

   .PaymentAcordion {
     margin-top: 10px;
     font-size: 14px;
     background: #f5f5f5;
     border: 1px solid #e7e7e7;
     box-sizing: border-box;
     font-family: Manrope, sans-serif;
   }
 `;

 

export const RightDiv = styled.div`
  width: 32%;
`;

export const PriceDiv = styled.div`
  border: 1px solid lightgray;
`;

export const ChekoutParent = styled.div`
  border: 1px solid lightgray;
`;


  export const Button = styled.div`
    width: 30%;
    height: 30px;
    padding: 10px;
    margin-left: 18%;
    text-align: center;
    background: #f16521;
    color: white;
    border-color: transparent;
    font-size: 15px;
    border: 1px solid #f16521;
    cursor: pointer;
    margin-bottom: 20px;
  `;

  export const BankOffer = styled.div`
    width: 92%;
    border: 1px dashed gray;
    padding: 15px;
    color: #848484;
    font-size: 14px;
    font-weight: bold;
    margin-top:15px;
  `;

  export const Secur = styled.div`
    font-size: 14px;
    color: #282c34;
    margin-top: 15px;
    line-height: 19px;
    font-family: Manrope, sans-serif;
  `; 


// shiping and Billing details

export const BillingDetailContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
  border: 1px solid #e7e7e7;
  background: #f5f5f5;
  padding: 16px 35px;

  .heading {
    font-size: 16px;
    color: #121212;
    font-weight: 500;
    padding-bottom: 10px;
  }

  .details {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.06em;
    color: #9a9a9a;
    margin: 14px 0px;
  }
`;

export const ShipingDetals = styled.div`
  color: #848484;
  font-size: 15px;
  padding: 10px;
`;

export const BillingDetals = styled.div`
  margin-left: 35%;
  color: #848484;
  font-size: 15px;
  padding: 10px;
`;

