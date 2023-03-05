
import React from 'react'
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from './SuccessCSS';
import { SuccessWrapper } from './SuccessCSS';
import {runFireworks}  from "../../Utils/confettiLibrary"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Success() {

    React.useEffect(() => {
        runFireworks()
    },[])

  return (
    <div>
    <Navbar />
    <SuccessWrapper>
      <div>
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2 className='thank'>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">If you have any questions, please email to </p>
        <p className="email"> pepperfry@gmail.com </p>
        
        <Link to="/">
          <Button>Continue Shopping </Button>
        </Link>
      </div>
    </SuccessWrapper>
    <Footer />
    </div>
  );
}

export default Success


