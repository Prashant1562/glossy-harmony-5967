import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'

const ProdintheCart = ({id, name, img1, lowprice, brand, deletefunc, handlecost}) => {
    const [quantity, setQuantity] = useState(1);
    let sum = quantity*lowprice;


   const handledelete = () =>{
      return deletefunc(id);
   }

   useEffect(() =>{
      return handlecost(sum);
   },[quantity])

  return (
    <div>
       
        <Flex margin="auto" justifyContent="space-evenly" alignItems="center" width="90%" marginTop="10px" border="1px solid grey">
            <Box width="15%">
                <img src={img1} alt={name} width="90%"/>
            </Box>
            <Box>
                <Text as={"code"}>{name}</Text>
            </Box>
            <Box>
                <Text as={"code"} color="teal">{brand}</Text>
            </Box>
            <Box>
                <Text as="i" fontSize="lg" color="green">₹{lowprice}</Text>
            </Box>
            <Box color="black">
              <Flex justifyContent="center" alignItems="center">
                <button style={{
                  color:"red",
                  cursor:"pointer",
                  width:"50px",
                  height:"50px",
                  borderRadius:"10px"}}    onClick={() => setQuantity(prev => prev-1)} disabled={(quantity==1) ? true : false}><Text margin="auto" fontSize="30px" textAlign="center">-</Text></button>
                <Text as="b" fontSize="xl" p={3}>{quantity}</Text>
                <button 
                style={{
                  color:"green",
                  width:"50px",
                  height:"50px",
                  cursor:"pointer",
                  borderRadius:"10px"}}onClick={() => setQuantity(prev => prev+1)} ><Text margin="auto" fontSize="30px" textAlign="center">+</Text></button>
              </Flex>
            </Box>
            <Box onClick={handledelete}>
              <DeleteIcon boxSize={30} color="red" cursor="pointer"/>
            </Box>
        </Flex>
        
    </div>
  )
}

export default ProdintheCart