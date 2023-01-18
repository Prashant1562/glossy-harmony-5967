import { Box, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import React from 'react'

export const Tab1 = () => {
  return (
    <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>MY CART <span>(1)</span></Tab>
    <Tab>MY WISHLIST <span>(1)</span></Tab>
    <Tab>RECENTLY VIEWED <span>(1)</span></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
      <Box h='40px' bg='yellow.200'>
                  1
                </Box>
                <hr />
                <Box h='40px' bg='tomato'>
                  2
                </Box>
                <hr />
                <Box h='40px' bg='pink.100'>
                  3
                </Box>
                <hr />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}
