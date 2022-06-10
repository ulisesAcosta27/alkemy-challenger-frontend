import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const ItemCards = () => {
  return (
    <Box 
      w="100%"
      h="auto"
      py='2rem'
      display='flex'
      flexWrap='wrap'
      justifyContent='space-evenly'
    >
      <Box
        w="21rem"
        h="auto"
        m='1rem'
        padding="1rem"
        textAlign="center"
        border="2px solid #242b3da0"
        borderRadius='2xl'
      >
        <Text fontSize="xl" p="0.5rem">
          Comprar Enpanadas
        </Text>
        <UnorderedList listStyleType="none" p="0.5rem">
          <ListItem py="0.1rem">Quantity: $1.000</ListItem>
          <ListItem py="0.1rem">Date: 24/12/22</ListItem>
          <ListItem py="0.1rem">Type: Egress</ListItem>
          <ListItem py="0.1rem">Catalog: Comida</ListItem>
        </UnorderedList>
        <Box py='.5rem'>
          <Button colorScheme="red" size='md' mx='.3rem'>
            Delete
          </Button>
          <Button colorScheme="teal" size='md' mx='.3rem'>
            Updates
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCards;
