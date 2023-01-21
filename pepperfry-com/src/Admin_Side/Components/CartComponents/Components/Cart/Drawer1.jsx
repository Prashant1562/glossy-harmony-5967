import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Img, Input, StackDivider, Text, useDisclosure, VStack } from "@chakra-ui/react"
// import axios from "axios"
import React, { useEffect } from "react"
import { FaCartArrowDown } from "react-icons/fa"
import { shallowEqual, useSelector } from "react-redux"
// import { shallowEqual, useDispatch, useSelector } from "react-redux"
// import { proFailureAction, proRequestAction, proSuccessAction } from "../../Redux/action"
// import { store } from "../../Redux/store"
import { Tab1 } from "./Tab"

function Drawer1() {
  const [size, setSize] = React.useState('')

  const {product}=useSelector((store)=>{
    return {
      product:store.product
    }
  },shallowEqual)

  let price=0;
  for(let i=0;i<product.length;i++){
    price=price+Number(product[i].price)
  }
  console.log("price:",price)



  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    // const sizes="sm"
    return (
      <>
        <Button ref={btnRef} onClick={() => handleClick("lg")}>
        <FaCartArrowDown/>
        </Button>
        <Drawer
          size={"lg"}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            
            
  
            <DrawerBody >
              <VStack bg='black' color={"white"}>
              
              <DrawerHeader fontSize={"15px"} display={"flex"} bg='black' color={"white"} ml={"-120px"}>Showing Availability At </DrawerHeader>
              <Flex>
              <Input placeholder='Type here...' width={"50%"} bg={"white"}/>
              <Text bg='black' color={"white"} ml={"20px"}>Check</Text>
              </Flex>
              <br />
              </VStack>
              
              <br />
              <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                bg={"white"}
              >
                
                <Tab1 bg='black'/>
              </VStack>
              
              
              
            </DrawerBody>
            
          
            <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
                Total:₹{price}
              </Button>
              <Button variant='outline' mr={3} onClick={onClose}>
                Continue Shopping
              </Button>
              <Button bg='#F16521' color={"white"}>Proceed To Pay Securely</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Drawer1