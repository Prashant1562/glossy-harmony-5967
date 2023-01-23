import React from 'react'
import { Flex, Img, Name, Navbar, NavbarWrapper } from './CheckoutNavbarCSS'
import logo from "../../Images/logo.svg";
import { Link } from "react-router-dom";

const CheckoutNavbar = () => {
  var user = JSON.parse(localStorage.getItem('userData'));
  // const name = user.name.toUpperCase();
  // console.log(name)

  return (
    <>
      <NavbarWrapper>
        <Navbar>
          <Link to="/">
            <Img src={logo} alt="cartIcon" />{" "}
          </Link>
          <Flex>
            <h5>Cart </h5> <h5> ---- </h5>
            <h5> Delivery & Billing Address </h5> <h5> ---- </h5>
            <h5> Payment </h5> 
          </Flex>
          <Name>WELCOME !</Name>
        </Navbar>
      </NavbarWrapper>
    </>
  );
}

export { CheckoutNavbar }