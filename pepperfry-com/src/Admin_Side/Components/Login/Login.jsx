import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../style/form.css";


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const items = JSON.parse(localStorage.getItem('login'))
  
  const onSubmit = (e) => {
      e.preventDefault();
      if (email && password) {
          let count = 0;
          for (let i = 0; i < items.length; i++) { 
              if (items[i].email === email && items[i].password === password) {
                  count++;
                  localStorage.setItem('userData', JSON.stringify(items[i].name))
              }
          }
          // console.log(count);

          if (count > 0) {
              const user = JSON.parse(localStorage.getItem('userData'))
              console.log('username =',user);
              
              //navigate to home or products page
          }
          else {
              //ask to register
              alert('Please login first')
              setEmail('')
              setPassword('')
          }
          
      }
      else {
          alert('Please fill the data in here')
      }
  }

  const register = () => {
      // navigate to register page
  }

  
  return (
  
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Email ID/Number</label>
        <br />
        <input
          type="text"
          className="form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="Password"
          className="form"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Link to={"/"}>
          <button className="reg" type="submit" >
            LOG IN
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
