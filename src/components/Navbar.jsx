import React from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box w="100%" h="4rem" shadow="xl">
      <Box
        w="80%"
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
      >
        <Text fontSize="lg" fontWeight="600">
          <Link to={"/"}>Hola Mundo</Link>
        </Text>
        <Box display={["none", "none", "block", "block"]}>
          <UnorderedList
            display="flex"
            justifyContent="space-between"
            listStyleType="none"
          >
            <ListItem p="1rem" fontSize="l">
              <Link to={"/form"}>Create Item</Link>
            </ListItem>
            <ListItem p="1rem" fontSize="l">
              Search
            </ListItem>
            <ListItem p="1rem" fontSize="l">
              <Link to={"/signup"}>Log out</Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box display={["block", "block", "none", "none"]} fontSize="3xl">
          <BiMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
