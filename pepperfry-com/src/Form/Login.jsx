import React, { useState } from 'react'
import {
 
  FormLabel,
  
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

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
        
    }


  return (
      <>
          <form onSubmit={onSubmit}>
              <Box>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type="email" value={ email} onChange={(e)=>setEmail(e.target.value)}/>
              </Box>
              <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </Box>
              
              <Button type="submit">Login</Button>
              <Button onClick={register}>Register</Button>
              
          </form>
      </>
  )
}
