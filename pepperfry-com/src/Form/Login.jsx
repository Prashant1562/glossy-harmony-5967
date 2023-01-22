import React, { useState } from 'react'
import {
 
  FormLabel,
  
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import styles from './login.module.css'
import logo from './fur2.png'
import logo2 from './furni.jpg'

export const Login = () => {
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
      <>
          <div className={styles.body}>
            
          
        <div className={styles.maindiv}>
            
         
        <div className={styles.div1}>
            <img className={styles.img} src={logo} alt="hi"/>
        </div>
        <div className={styles.div2}>
            
          
          <form className={styles.form} onSubmit={onSubmit}>
                      <Box>
                         
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input className={styles.input_field} type="email" value={ email} onChange={(e)=>setEmail(e.target.value)}/>
                      
                         
                      </Box>
                   
                    <br/>
                    
              <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input className={styles.input_field} type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      </Box>
                     
                      <br />
                      <br/>
                      <br/>
                    
              <div>
                      <Button className={styles.button} type="submit">Login</Button>
                      <br/>
                          <br/>
                              <br/>
                    
                          <Button className={styles.button} onClick={register}>Register</Button>
                          </div>
            </form>
              </div>
              </div>
              </div>
      </>
  )
}
