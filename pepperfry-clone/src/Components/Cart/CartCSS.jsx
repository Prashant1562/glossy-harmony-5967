import styled from "styled-components";

export const CartPageWrapper = styled.div`
  margin-top: 100px;
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const CartLeft = styled.div`
  width: 66%;
`;


export const CartRight = styled.div`
  width: 32%;
`;

export const CoupenDiv = styled.div`
  border: 1px solid lightgray;
  padding: 8px;
  position: relative;
  margin-bottom: 15px;

  & span {
    position: absolute;
    top: 10px;
    left: 40px;
  }
`;

export const CartCountHeading = styled.div`
  margin-top: 100px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0;
  color: #121212;
  line-height: 38px;
  font-family: Manrope, sans-serif;
  margin-left: 7%;
`;

export const PriceContainer = styled.div`
    border : 1px solid lightgray;
  box-shadow: -1px -1px 0px #e7e7e7, 1px 1px 0px #e7e7e7;
`;

export const CartHeader = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid lightgray;
    padding-left: 18px;
    padding:12px;
    font-size: 15px;
    position: relative;
    font-weight: 500;
    letter-spacing: 0;
    margin-right: 2px;
    display: inline-block;
    vertical-align: middle;
}


  
`;


export const Green = styled.div`
  color: green;
`;

export const Blue = styled.span`
color:blue;
`

export const Orange = styled.span`
  color:  #f16521;;
`;


export const Emi = styled.div`
  font-size: 10px;
  color: #4a4a4a;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;

  & p {
    padding: 5px 15px 5px 20px;
  }

  & span {
    text-decoration: underline;
  }
`;



export const CheckBoxDiv = styled.div`
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0px;
  font-size: 12px;

  & span {
    padding-left: 5px;
    padding-top: 2px;
  }

  .bp {
    padding-left: 55px;
    padding-top: 4px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
  color: #fff;
  background-color: #f16521;
  font-size: 16px;
  box-sizing: border-box;
`;



// Cart card 

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom:30px;
  border: 1px solid lightgray;
`;


export const CardLeft = styled.div`
  width: 17%;
  margin-top: 30px;

  & img {
    width: 90px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & div {
    width: 50%;
    margin: auto;
    margin-top: 20px;
    font-size: 11px;
    color: #454545;
    padding: 1px 10px;
    border: 1px solid #979797;
    border-radius: 20px;
    text-align: center;
    letter-spacing: 0;
    font-weight: 600;
  }
`;

export const CardMid = styled.div`
  width: 40%;
  font-weight: 500;
  font-size: 13px;
  margin-top: 16px;

  .name {
    color: #121212;
  }

  .month {
    color: #f16521;
  }

  .flexset {
    position: relative;
  }

  .flexset span {
    position: absolute;
    top: 5px;
    left: 40px;
  }

  .spanItem p {
    padding-left: 40px;
    margin: 0;
    margin-top: -10px;
    padding-top: 12px;
  }

  .Safeitems {
    margin-left: 20px;
  }

  .Safeitems p {
    margin: 0px;
    padding: 0px;
  }

  .Safeitemsimg {
    margin-left: -10px;
    width:25px;
    height:25px;
  }

  .calenderIcon {
    width: 20px;
  }
`;


export const CardRight = styled.div`
  width: 15%;
  color: #848484;
  margin-left: 80px;
  margin-top: 30px;

  & button {
    border: none;
    background-color: transparent;
    width: 20px;
    font-size: 15px;
  }

  .quantity {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
  }

  .qprice {
    padding-top: 20px;
    text-decoration: line-through;
    margin-bottom: 5px;
  }

  .add {
    padding-top: 140px;
    font-size: 15px;
    border:none;
  }
`;

export const CardIcon = styled.div`
  width: 20%;
  display: flex;
  justify-content: right;
  align-items: right;
  padding-right: 10px;
  margin-top: 30px;

  & span {
    padding-right: 8px;
  }
`;


export const EmptyCart = styled.div`
  margin-top: 25vh;
  margin-bottom: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    width: 20px;
    height: 20px;
  }
  & span {
    width: 20px;
    border: 1px solid black;
    padding: 6px;
    margin-top: 20px;
  }
`;