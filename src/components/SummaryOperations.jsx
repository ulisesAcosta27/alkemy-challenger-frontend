import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const SummaryOperations = ({ apiBudgets }) => {
  const navigate = useNavigate()
  let addArray = [],
    subtractArray = [];

  apiBudgets.filter(item => {
    if(item.type === 'egress')
      return addArray = [...addArray, item.quantity]
    if(item.type === 'incomes')
      return subtractArray = [...subtractArray, item.quantity]
  })
  let addResult = addArray.reduce((a, b) => a + b, 0)
  let subtractResult =subtractArray.reduce((a, b) => a + b, 0)
  let resultOp = addResult - subtractResult

  return (
    <Box 
      w={['100%', '90%', '90%', '80%']} 
      mx='auto' 
      my='2rem'
      border='2px solid #202636a7'
      p='1rem'
      borderRadius='2xl'
      shadow='lg'
      textAlign='center'
    >
      <Text fontSize='xl' p='.5rem'>
        Summary of Operations
      </Text>
      <Text fontSize='3xl' fontWeight='semibold' py='1rem'>
        ${ resultOp.toLocaleString() }
      </Text>
      
      <Box p='.5rem'>
          <Button 
            colorScheme="teal"
            size='md'
            mx='.3rem'
            onClick={() => navigate('/egress')}
          >
            Egress
          </Button>
          <Button colorScheme="teal" size='md' mx='.3rem'>
            All
          </Button>
          <Button 
            colorScheme="teal"
            size='md'
            mx='.3rem'
            onClick={() => navigate('/incomes')}
          >
            Incomes
          </Button>
      </Box>


    </Box>
  )
}

export default SummaryOperations