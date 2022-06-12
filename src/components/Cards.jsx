import React from "react";
import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from 'axios'

const Cards = ({ item }) => {

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`https://alkemy-challenger-backend.vercel.app/budgets/${id}`)
      // setTasks(tasks.filter((task) => task.id !== id));
      console.log(id)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {item.map((e) => (
        <Box
          key={e.id}
          w="21rem"
          h="auto"
          m="1rem"
          padding="1rem"
          textAlign="center"
          border="2px solid #242b3da0"
          borderRadius="2xl"
        >
          <Text fontSize="xl" p="0.5rem">
            {e.name}
          </Text>
          <UnorderedList listStyleType="none" p="0.5rem">
            <ListItem py="0.1rem">
              Quantity: ${e.quantity.toLocaleString()}
            </ListItem>
            <ListItem py="0.1rem">Date: {e.date}</ListItem>
            <ListItem py="0.1rem">Type: {e.type}</ListItem>
            <ListItem py="0.1rem">Catalog: {e.catalog}</ListItem>
          </UnorderedList>
          <Box py=".5rem">
            <Button
              colorScheme="red"
              size="md"
              mx=".3rem"
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </Button>
            <Button colorScheme="teal" size="md" mx=".3rem">
              Updates
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Cards;
