import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar, WholeNavbar} from './NavbarCSS';
import Images from '../../Images/logo.png';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link  } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import "../../style/slider.css"
import {Text,Flex} from "@chakra-ui/react"
import { useSelector } from 'react-redux';
// import "../Login/popup.css"
// import { MainLogin } from '../Login/Mainlogin';

const Navbar = () => {
  var user = JSON.parse(localStorage.getItem('userData'));
  const cart = useSelector((store) =>{
   
    return store.cartReducer.cart
    })
  const [popup,popupTrig] = React.useState(false);
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Super Momma Sale | Up to 60% Off | Use Code <span>MOM</span></LeftText>
          <RightText>Extra 20% Cashback On All Orders | T&C Apply <a href="/">Sign Up</a></RightText>
        </Sale>
      </Header>
    <WholeNavbar>
      <Dummy>
        <DummyLeft>
            <span>Sell on Pepperfry</span>
            <span>Become a Franchisee</span>
            <span>Buy in Bulk</span>
            <span>Find a Studio</span>
        </DummyLeft>
        <DummyRight>
          <p>Enter Pincode</p>
          <span>Find Pepperfry Studio</span>
        </DummyRight>
      </Dummy>
      <Nav>
        <TopNav>
          <div>
            <NavLogo to="/"><img src={Images} alt={"logo"}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
          <div className="iconDiv">
            <div className="iconOne">
              <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt={"help"} className="help" />
            </div>
            <div className="iconOne">
              <Link to='/signup'>
              <button className='log' onClick={()=>popupTrig(true)}><PermIdentityOutlinedIcon className="icon" />
              
              </button>
              </Link>
              <h6 style={{margin:"0%"}}></h6>
            </div>
            <div className="iconOne">
              <FavoriteBorderOutlinedIcon className="icon" />
            </div>
            <div className="iconOne">
            <Link to="/cart">
                <Flex>
                <ShoppingCartOutlinedIcon className="icon"/>
                  <Text margin="auto" mr="-2rem" color="white" textAlign="center" width="25px" position="relative" left="-0.5rem" top="-1rem" bg="#ff7856" borderRadius="50%" >{cart.length}</Text>
                </Flex>
              </Link>
            </div>
          </div>
        </TopNav>
        <div className='popup-div'>
          {/* <MainLogin trigger = {popup} setTrigger={popupTrig}/> */}
        </div>
        <DropdownMenu />
      </Nav>
    </WholeNavbar>
    </>
  )
}

export default Navbar;