import styled from "styled-components";


export const NavbarWrapper = styled.nav`
  width: 100%;
  box-shadow: 0px 4px 0px #e7e7e7;
  position: fixed;
  top: 0px;
  padding: 5px 0;
  background-color: white;
  z-index: 4;
`;

export const Navbar = styled.div`
  display: flex;
  max-width: 1085px;
  height: 72px;
  justify-content: space-between;
  margin: auto;

  & h5 {
    color: #848484;
    font-size: 13px;
    padding:5px;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px;
  font-weight: 100;
`;

export const Img = styled.img`
  width: 130px;
  height: 27px;
  margin-top: 17px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  padding: 10px;
  padding-top: 20px;
`;