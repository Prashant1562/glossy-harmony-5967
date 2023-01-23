import styled from "styled-components";

export const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
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
  }

`;
