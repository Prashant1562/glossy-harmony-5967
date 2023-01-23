import styled from "styled-components";



 export const AdressContainer = styled.div`
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

`;


export const RightDiv = styled.div`
  width: 32%;

`;

export const PriceDiv = styled.div`
  border: 1px solid lightgray;
`;

export const AdressInputContainer = styled.div`
  border: 1px solid lightgray;
  margin-bottom:30px;
`;

export const Form = styled.div`
  width: 85%;
  margin: auto;
  line-height: 30px;
 

  & input {
    width: 78%;
    height: 38px;
    margin-top: 20px;
  }
  & h2 {
    font-size: 15px;
    color: #121212;
    font-weight: 700;
    line-height: 1.6;
    margin-top: 20px;
    margin-left: -30px;
  }

  input[id="city"],
  input[id="state"] {
    width: 37%;
    margin-left: 4%;
  }

  input[id="city"] {
    margin-left: 21%;
  }

  .name {
    margin-left: 20%;
  }

  .mb {
    margin-left: 9%;
  }
  .pin {
    margin-left: 18%;
  }
  .address {
    margin-left: 18%;
  }
  .country {
    margin-left: 21%;
  }

  .billing {
    margin-left: 16%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  & label {
    margin-left: -30px;
    font-size: 14px;
    color: #848484;
    font-family: Manrope, sans-serif;
  }
`;

 export const Button = styled.div`
   width: 30%;
   height: 40px;
   padding: 5px;
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


