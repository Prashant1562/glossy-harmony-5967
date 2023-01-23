import React,{useEffect} from 'react'
import {  Checkbox } from "@mui/material";
import { useState } from "react";
import { Form, Button, AdressInputContainer } from "./AddressCSS";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../../Redux/Cart/action"
import { useSelector, useDispatch } from "react-redux";



const AddressInput = () => {

let initialValue = {
  name: "",
  phoneNo: "",
  pincode: "",
  address: "",
  city: "",
  state: "",
  country: "India",
};

const [formData, setFormData] = useState(initialValue);
const [filled,setFilled] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

 const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
 };

   const handleSubmit = () => {
    if (formData.name === "" || formData.phoneNo === "" || formData.pincode === "" || formData.address === "" || formData.city === "" || formData.state === "") {
    alert("Please Fill all box");
     }else{
       setFilled(true);
       dispatch( saveShippingInfo(formData) );
     navigate("/checkout"); 
      
     }

 };
  return (
    <AdressInputContainer>
      <Form>
        {/* <FormLeft> */}
        <h2>Add New Shipping Address</h2>
        <div>
          <div>
            <label>Name</label>
            <input
              className="name"
              type="text"
              name="name"
              placeholder=" Enter your name "
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Mobile number</label>
            <input
              className="mb"
              type="text"
              name="phoneNo"
              placeholder=" 95820XXXXX"
              onChange={handleChange}
              style={{marginLeft:"70px"}}
            />
          </div>

          <div>
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              className="pin"
              placeholder="40059"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              className="address"
              name="address"
              placeholder=" House Number, Building Name, Society, Area, Road, Landmark"
              onChange={handleChange}
            />
          </div>

          <div>
            <span>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
            </span>

            <span>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
            </span>
          </div>

          <div>
            <input type="text" disabled value=" India" className="country" />
          </div>

          <div className="billing">
            <Checkbox />
            <span> Billing Address Is The Same As Shipping Address</span>
          </div>

         
            <Button onClick={handleSubmit}>SAVE & CONTINUE </Button>
       
        </div>
        {/* </Left> */}
      </Form>
    </AdressInputContainer>
  );
}

export { AddressInput }