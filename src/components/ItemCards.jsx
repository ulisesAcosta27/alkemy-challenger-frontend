import React from "react";
import { Box } from "@chakra-ui/react";
import Cards from "./Cards";

const ItemCards = ({ apiBudgets }) => {
  return (
    <Box
      w="100%"
      h="auto"
      py="2rem"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
    >
      <Cards item={apiBudgets} />
    </Box>
  );
};

export default ItemCards;
