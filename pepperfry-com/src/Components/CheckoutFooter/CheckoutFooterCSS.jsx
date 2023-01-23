import styled from "styled-components";

export const FooterWrapperC = styled.div`
  width: 100%;
  height: 250px;
  padding: 5% 0 0 10%;
  margin-top: 60px;
  padding-bottom: 50px;
  border: 1px solid rgb(231, 231, 231);
  background-color: #efefef;

  display: grid;
  grid-template-columns: 33.3% 36.3% 30.3%;
  justify-content: center;
`;


export const Flex = styled.div`
  display: flex;

  flex-direction: row;
  width: 85%;
  margin-right: 20px;
  flex-wrap: wrap;

  & img {
    margin-right: 10px;
  }
  & div {
    padding: 2px;
    padding-top: 8px;
  }
`;

export const FooterText = styled.span`
  font-size: 12px;
  line-height: 17px;
  color: #969696;
  font-family: Manrope, sans-serif;

`;

export const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 20%, 80%;
  grid-template-areas: "a b";

  & img {
    grid-area: "a";
  }

  & div {
    grid-area: "b";
    margin-top: -15px;
    font-weight: 450;
    font-size: 12px;
    color: #969696;
    font-family: Manrope, sans-serif;
  }

  & div > span {
    font-weight: 600;
  }

`;

export const CopyRight = styled.p`
  font-size: 14px;
  text-align: center;
  color: #969696;
  line-height: 19px;
  padding: 15px;
  display: block;
  padding-top: 90px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const Img2 = styled.img`
  padding: 10px;
`;

export const FooterHeader = styled.div`
  color: #969696;
  font-size: 15px;
  line-height: 19px;
  padding-bottom: 15px;
 margin-top: -40px;
}
`;