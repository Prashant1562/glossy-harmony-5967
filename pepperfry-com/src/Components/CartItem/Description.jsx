import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Link,
    CardFooter,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { postRequestAction, proFailureAction, proRequestAction, proSuccessAction } from '../../Redux/action';

const inital={
  "img1": "https://ii3.pepperfry.com/media/catalog/product/n/i/494x544/niki-3-seater-sofa-in-sea-green-colour-by-febonic-niki-3-seater-sofa-in-sea-green-colour-by-febonic-hkzcol.jpg",
  "img2": "https://ii3.pepperfry.com/media/catalog/product/n/i/90x99/niki-1-seater-sofa-in-sea-green-by-febonic-niki-1-seater-sofa-in-sea-green-by-febonic-41zm4s.jpg",
  "img3": "https://ii3.pepperfry.com/media/catalog/product/n/i/90x99/niki-1-seater-sofa-in-sea-green-by-febonic-niki-1-seater-sofa-in-sea-green-by-febonic-41zm4s.jpg",
  "img4": "https://ii2.pepperfry.com/media/catalog/product/f/a/90x99/fabric-care-kit-fabric-care-kit-nvhcld.jpg",
  "name": "Niki 3 Seater Sofa In Sea Green Colour",
  "brand": "Febonic",
  "lowprice": 22908,
  "highprice": 35796,
  "rating": 4.3,
  "id": 8
}
  
  export default function Description() {

    

    const dispatch=useDispatch()

    const [data,setData]=useState(inital)

    console.log("data:",data)
    const handleClick=()=>{
      //data will post to cart and it will shown in cart

      dispatch(postRequestAction())
      axios.post('http://localhost:8080/Products',{}).then((res)=>{
        dispatch(postRequestAction(res.data))
        alert(`Successfully added ${res.data}`)
      }).catch((err)=>{
        console.log("err:",err)
      })
    }

    const handleBuy=()=>{
      //href to checkout page
    }
    return (
      <div>
        {data.length && data.map((el)=>{
          return (
            <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                el.img1
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Automatic Watch
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                $350.00 USD
              </Text>
              <select style={{"borderColor":"black","size":"20px"}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  // borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  // color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>

            </Stack>
            
            <Flex gap={"20px"}>
                
            <Link path={"*"}>
            <Button
              rounded={'none'}
              w={'50%'}
              mt={8}
              size={'lg'}
              py={'7'}
              borderColor={"black"}
              // bg={useColorModeValue('white', 'gray.50')}
              // color={useColorModeValue('black', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
                
              }}
              onClick={()=>handleClick()}
              >
              Add to cart
            </Button>
            </Link>
            <Button
              rounded={'none'}
              w={'50%'}
              mt={8}
              size={'lg'}
              py={'7'}
              // bg={useColorModeValue('#FF7035', 'gray.50')}
              // color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={handleBuy}
              >
              Buy Now
            </Button>
            </Flex>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
          )
        })}
      </div>
    );
  }