import { Box, Flex, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdCheckCircle} from "react-icons/md";
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const dispatch = useDispatch();
    const [mobdata, setMobdata] = useState({});
    const { id } = useParams();
    console.log(id);


   
  return (
    <Box bg={"#eef6f9"} p="2rem" >
      <Flex  justifyContent="space-around" alignItems="center"  bg="white">
        <Box w="30%">
            <img width="90%" src={mobdata.img1} alt={mobdata.id} />
        </Box>
        <Box lineHeight="3rem" bg="white"  >
            <Text fontSize='3xl'>{mobdata.name}</Text>
            <Text fontSize='xl' color="#4ca8b6" textAlign="left">{mobdata.brand}</Text>
            <Flex gap={2} justifyContent="left" alignItems="center">
              <Text as="b" fontSize="2xl">₹{mobdata.lowprice}</Text>
              <Text fontSize='md' as="del">{mobdata.highprices}</Text>
              
            </Flex>
            <UnorderedList color="gray.400">
              
              <ListItem>Warranty Available : Manufacturer Warranty</ListItem>
            </UnorderedList>
            <Flex  gap={5} >
            <button style={{
              color:"#ff7856" ,
                width:"200px",
                height:"50px",
                backgroundColor:"white",
                borderRadius:"10px",
                border:"2px solid #ff7856"

            }}  onClick={handleAddCard} >ADD TO CART</button>
            <button style={{
              color:"white" ,
                width:"200px",
                height:"50px",
                backgroundColor:"#ff7856",
                borderRadius:"10px"

            }}>BUY NOW</button>
            </Flex>
            <List>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                COD Available
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                Free Shipping
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                Delivered 2-5 Business Days
              </ListItem>
            </List>
        </Box>
    </Flex>
    </Box>
  )
}

export default SingleProduct