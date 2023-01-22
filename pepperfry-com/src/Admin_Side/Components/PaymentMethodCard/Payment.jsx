import React,{useState} from 'react'
import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Payment = () => {
  let initialValue = {
    number: "",
    cvv: "",
    expiry: "",
    name: "",
  };

  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // console.log(formData)

     const handleSubmit = () => {
         navigate("/cardpayment");
        }

  return (
    <PaymentOPtionContainer>
      <h4 className="chooseCard-heading">CHOOSE YOUR DEBIT CARD</h4>
      <FlexP>
        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii1.pepperfry.com/images/master-card-img.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/new-visa-logo.png"
            alt=""
          />
        </div>

      </FlexP>

      {/* <CardDetails>
        <form>
          <label className="formlabel">Card Number</label>
          <input
            type="number"
            name="number"
            required
            placeholder="Enter Card Number"
            className="formName"
            onChange={handleChange}
          />

          <FlexP>
            <div className="cvv">
              <label>Expiry</label> <br />
              <input
                type="text"
                name="expiry"
                required
                placeholder="MM/YY"
                className="inputexpiry"
                onChange={handleChange}
              />
            </div>

            <div className="cvv">
              <label>CVV</label> <br />
              <input
                type="password"
                required
                name="cvv"
                placeholder="Enter CVV "
                className="inputexpiry"
                onChange={handleChange}
              />
            </div>
          </FlexP>
          <br />

          <label className="formlabel">Name On Card</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name as on Card "
            className="formName"
            onChange={handleChange}
          />

          <div className="chekboxname">
            <Checkbox color="secondary" />
            Save this option securely for fastest payment
          </div>

          
        </form>
      </CardDetails> */}
      <Button onClick={handleSubmit}> PROCEED TO PAY</Button>
      <div className="note">Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options.</div>
    </PaymentOPtionContainer>
  );
}

export {Payment}