import './App.css';
import WebFont from "webfontloader"
import React from "react"
 import { Routing } from './Routes/Routing';
import { MainCheckout } from './Components/Checkout/MainCheckout';
import Success from './Components/SucessPage/Success';
import CardPayment from './Components/CardPayment/CardPayment';


function App() {

 React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope", "sans - serif"]
      },
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
