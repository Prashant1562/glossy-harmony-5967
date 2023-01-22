
import styled from "styled-components";

export const PaymetMethodContainer = styled.div`
  width: 100%;
  padding: 17px;
  font-size: 14px;
  background: #f5f5f5;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  font-family: Manrope, sans-serif;
  display: flex;
  padding-left: 20px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  & img {
    width: 15px;
    height: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

  // width: 56%;
    // margin-left: 7.5%;


    ///payment Card 

    export const PaymentCardContainer = styled.div`
    .chooseCard-heading{
      margin-top: 10px;
      text-align: center;
    }

    .note{
      font-size: 13px;
      padding: 4%;
      color: gray;
    }

    .heading{
      font-weight: bold;
      font-size: 15px;
      color: #121212;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0.06em;
      display: flex;
      margin-top: 10px;
      margin-bottom: 32px;
      margin-left: 18px;
    `;


    export const PaymentDiv = styled.div`
      display: flex;
      width: 95%;
      margin: auto;
      box-sizing: border-box;
      font-family: Manrope, sans-serif;
      margin: auto;
      margin-top: -20px;
      background: #ffffff;
      border: 1px solid lightgray;
    `;

  

     export const PaymentCardParent = styled.div`
       width: 35%;
       margin: auto;
       margin-top: 10px;
       margin-bottom: 10px;
       box-sizing: border-box;

       & img {
         width: 15px;
         height: 15px;
         object-fit: cover;
       }

       & div {
         padding-left: 15px;
         color: #848484;
         display: block;
         font-size: 14px;
         font-weight: 600;
         letter-spacing: normal;
         text-transform: uppercase;
         font-family: Manrope, sans-serif;
       }

       .patmentBox {
         border: 1px solid lightgray;
         width: 100%;
         margin-top: 1px;
         display: flex;
         flex-direction: row;
         padding: 15px;
         justify-content: left;
         align-items: center;
         background: #d0d0d0;
         font-size: 14px;
         line-height: 17px;
         text-transform: uppercase;
       }
     `;


// Payment option

export const FlexP = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 13%;
  grid-gap:10%;

  & label {
    font-weight: 600;
    font-size: 14px;
  }

  & input {
    width: 140px;
    height:35px;
  }

  .cvv{
    margin-top:20px;
    margin-left:-10px;
  }
`;


export const PaymentOPtionContainer = styled.div`
  border: 1px solid lightgray;
  width: 60%;

  .ImageDIv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    border: 1px solid lightgray;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: -20px;
  }
`;

export const CardDetails = styled.div`
  margin: 50px;

  .formlabel {
    margin-left: -15px;
    padding: 15px;
    margin-top: -100px;
    font-weight: 600;
  }
  .formName {
    padding: 8px;
  }

  .chekboxname {
    font-size: 12px;
    margin-top:20px;

  }
`;

export const Button = styled.button`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 5rem;
  margin-left: 18%;
  border: none;
  color: white;
  background-color: #f16521;
  text-align: center;
  margin-top: 100px;
`;


