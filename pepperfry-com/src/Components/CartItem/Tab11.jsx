import {Button, Card, CardBody, CardFooter, Heading, Image,Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { delSuccessAction, proFailureAction, proRequestAction, proSuccessAction } from '../../Redux/CartReducer/action'

export const Tab11 = () => {

  const dispatch=useDispatch()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const {product,isLoading}=useSelector((store)=>{
    return {
      product:store.product,
      store:store.isLoading
    }
  },shallowEqual)

  const getPro=()=> {
    //dispatch()request
    dispatch(proRequestAction())
    axios.get(" http://localhost:8080/Products").then((res)=>{
      console.log("res:",res)
      dispatch(proSuccessAction(res.data))
    }).catch((err)=>{
      console.log("err:",err)
      dispatch(proFailureAction())
    })
    
  }


  const deleteTodo=(id)=>{
    axios.delete(`http://localhost:8080/Products/${id}`).then(()=>{
      dispatch(delSuccessAction(id))
      getPro(id)
    }).catch((err)=>{
      console.log("err:",err)
    })
  }

  useEffect(() => {
    getPro()
  }, [])
  return (  

    <div>
      
  {product.length && product.map((el)=>{
    return (
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>{isLoading && <h3>...loading</h3>}
        {<Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={el.image}
    alt='Caffe Latte'
  />}

  <Stack>
    <CardBody>
      <Heading size='md'>{el.name}</Heading>

      <Text py='2'>
        Price:₹{el.price}
      </Text>
      <Text py='2'>
        Tribe Price:{el.tribe}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='gray' onClick={()=>deleteTodo(el.id)}>
        Remove
      </Button>
      <Button ml={"20px"} variant='solid' colorScheme='gray'>
        Move to Wishlist
      </Button>
    </CardFooter>
  </Stack>
      </Card>
    )
  })}
  {product.length===0 && <Button colorScheme='orange' ml={"35%"}>Continue Shopping</Button>}
    </div>
  )
}