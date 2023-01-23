import styled from "styled-components";

export const PriceDiv = styled.div`
  width: 100%;

`;
  // width: 32%;

  
export const PriceContainer = styled.div`
 
`;

export const PriceWraper = styled.div`
  padding: 22px;
  font-family: "Manrope", sans-serif;
  color: #4a4a4a;
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
  padding-top: 10px;
  letter-spacing: 0.06em;

  .cardDisplay {
    display: flex;
    justify-content: space-between;
    width: inherit;
    padding: 2px;
    margin-top: 8px;
    padding-right: 6px;
  }
`;

export const Green = styled.div`
  color: green;
`;

export const Blue = styled.span`
  color: blue;
`;

export const Orange = styled.span`
  color: Orange;
`;

export const CartItem = styled.div``;

export const TotalPrice = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;

  .total {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 15px;
    font-weight: 600;
  }

  .totalPrice {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 15px;
    font-weight: 600;
    text-align: right;
  }

  .tax {
    color: #848484;
    font-weight: 600;
    padding-top: 10px;
  }
`;



export const Hr = styled.div`
  width: 100%;
  height: 2px;
  border: 1px solid gary;
  background-color: gray;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Emi = styled.div`
  font-size: 10px;
  color: #4a4a4a;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;

  & p {
   padding-left:10px;
  }

  & span {
    text-decoration: underline;
  }
`;


export const CheckBoxDiv = styled.div`
  & Grid {
    color: red;
  }
`;