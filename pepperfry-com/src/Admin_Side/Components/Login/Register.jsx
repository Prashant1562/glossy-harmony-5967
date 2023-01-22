import React, { useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../../style/form.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/Login/action";
import axios from "axios";


const items = JSON.parse(localStorage.getItem('login')) || []

export const Register = () => {
   
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [all, setAll] = useState(items);
  console.log("all", all);
  localStorage.setItem('login', JSON.stringify(all))

  
  const onSubmit = (e) => {
      e.preventDefault();
      if (name && email && password) {
          const newLogin = { id: Math.random(), name, email, password }
          setAll([...all, newLogin])
          setEmail('')
          setPassword('')
          setName('')


          //navigate to login page


          //console.log(all);    
      }
      else {
          alert('Please fill the data in here')
      }
  }

      return  (
        <div className="full">
          <form onSubmit={onSubmit}>
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              className="form"
              name="name"
            />
            <br />
            <br />
            
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form"
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              type="password"
              className="form"
            />
            <br />
            <br />

            <button className="reg" type="submit">
              REGISTER
            </button>
          </form>
          <br />
          <br />
        </div>
      ); 
        
    
};
