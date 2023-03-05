import React, { useEffect } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import { Box, Flex, Grid } from '@chakra-ui/react';
import ProdSidebar from './ProdSidebar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getdataFailure, getdataRequest, getdataSuccess } from '../Redux/SofaRedux/action';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const ProductPage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    const {sofadata, isLoading, isError} = useSelector((store) =>{
      console.log(store.sofaReducer);
      return {
          sofadata : store.sofaReducer.sofadata,
          isLoading : store.sofaReducer.isLoading,
          isError : store.sofaReducer.isError,
      }
    })

    const getData = () =>{
        dispatch(getdataRequest());
        axios.get("https://pepperfry-website-api.onrender.com/sofas",{
           
          params : {
            brand : searchParams.getAll("brand"),
            _sort: searchParams.get("order") && "lowprice",
                _order: searchParams.get("order")
           }
        }).then((res) =>{
            console.log(res.data);
            dispatch(getdataSuccess(res.data));
        }).catch((err) =>{
            dispatch(getdataFailure());
        })
    }

    useEffect(()=>{
      getData();
    },[location.search]);
    
  return (
    <div>
    <Navbar />
            <div>
                {isLoading ? <h3>Loading...</h3> : <div></div>}
                {isError ? <h3>something went wrong! please try again</h3> : <div></div>}
            </div>
       <Flex justifyContent="space-evenly" gap={4} bg={"#eef6f9"} pt="1.5rem" marginBottom="20px">
         <ProdSidebar />
         <Box w="75%" boxShadow='xs' bg="white">
          <Grid templateColumns='repeat(3, 1fr)' templateRows='auto' gap={4}>
           {sofadata?.map((el)=> <ProductCard key={el.id} {...el} />)}
          </Grid>
         </Box>
       </Flex>
       <hr></hr>
       <Footer />
       </div>
  )
}

export default ProductPage