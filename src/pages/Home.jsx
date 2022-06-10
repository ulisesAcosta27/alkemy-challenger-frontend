import { Box } from '@chakra-ui/react'
import React from 'react'
import ItemCards from '../components/ItemCards'
import Navbar from '../components/Navbar'
import SummaryOperations from '../components/SummaryOperations'


const Home = () => {
  return (
    <>
      <Navbar />
      <Box w={['90%', '80%', '80%', '80%', ]} mx='auto' my='3rem'>
        <SummaryOperations />
        <ItemCards />
      </Box>
    </>
  )
}

export default Home