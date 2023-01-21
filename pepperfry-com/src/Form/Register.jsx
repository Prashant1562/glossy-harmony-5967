import React, { useState } from 'react'
import {
  
  FormLabel,
  
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'



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


  return (
      <>
          <form onSubmit={onSubmit}>
              <Box>
                  <FormLabel htmlFor="text">Name</FormLabel>
                  <Input type="text" value={ name} onChange={(e)=>setName(e.target.value)}/>
              </Box>
              <Box>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type="email" value={ email} onChange={(e)=>setEmail(e.target.value)}/>
              </Box>
              <Box>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </Box>
              
              <Button type="submit">Register</Button>
          </form>
      </>
  )
}
