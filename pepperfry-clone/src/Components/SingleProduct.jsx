import { Box, Flex, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdCheckCircle} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { getCartData } from '../Redux/CartRedux/action';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const SingleProduct = () => {
  const dispatch = useDispatch();
    const [sofadata, setSofadata] = useState({});
    const { id } = useParams();
    console.log(id);

    const percentageOff = Math.floor(100 - ((sofadata.lowprice / sofadata.highprice) * 100));

    const handleAddCard = () =>{
      axios.get(`https://pepperfry-website-api.onrender.com/sofas/${id}`).then((res) =>{
        console.log(res.data);
        dispatch(getCartData(res.data));
      }).catch((err) =>{
        console.log("Error Feching Data");
      })
    }


    useEffect(() =>{
      axios.get(`https://pepperfry-website-api.onrender.com/sofas/${id}`).then((res) =>{
        console.log(res.data);
        setSofadata(res.data);
      }).catch((err) =>{
        console.log("Error feching Data");
      })
    },[id]);

  return (
    <div>
    <Navbar />
    <Box bg={"#eef6f9"} p="2rem" margin="auto">
      <Flex  justifyContent="space-around" alignItems="center"  bg="white">
        <Box w="30%" marginLeft="50px">
            <img width="90%" src={sofadata.img1} alt={sofadata.id} />
            <Box border='1px' borderColor='gray.200' w="40%" marginTop="10px" display="flex" gap="5px">
              <img src={sofadata.img2} alt="adad" style={{width:"200px"}}/>
              <img src={sofadata.img3} alt="adad" style={{width:"200px"}}/>
              <img src={sofadata.img4} alt="adad" style={{width:"200px"}}/>
              </Box>
            
        </Box>
       
        <Box lineHeight="2rem" bg="white" marginLeft="80px">
            <Text fontSize='3xl' color="orange">{sofadata.name}</Text>
            <Text fontSize='xl' color="#4ca8b6" textAlign="left">{sofadata.brand}</Text>
            <Text fontSize='xl' color="red" textAlign="left">₹{sofadata.lowprice}</Text>
            <Text fontSize='xl' color="#4ca8b6" textAlign="left">{percentageOff}% Off</Text>
           
           
            <UnorderedList color="gray.400">
              <ListItem>36 Month's Warranty
          </ListItem>
          <ListItem>Last Day to Earn Cashback upto 5%</ListItem>
            </UnorderedList>
            <Box  w="50%" border='1px' borderColor='gray.200'>
            <img
            width="90%"
            src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_05042022_nd.jpg"
            alt=""
          /> 
          </Box>
         
            <Flex  gap={5} >
            <button style={{
              color:"#ff7856" ,
                width:"200px",
                height:"50px",
                backgroundColor:"white",
                borderRadius:"10px",
                border:"2px solid #ff7856",
                cursor:"pointer"

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
              Delivery charges as applicable <b>Pincode Required</b>
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
              Assembly charges as applicable<b>Pincode Required</b>
              </ListItem>
              <ListItem>
              <ListIcon as={MdCheckCircle} color='green.500' />
                Delivered 2-5 Business Days
              </ListItem>
            </List>
        </Box>
    </Flex>
    </Box>
    <hr></hr>
       <Footer />
       </div>
  )
}

export default SingleProduct