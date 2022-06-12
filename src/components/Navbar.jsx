import React from "react";
import {
  Box,
  Button,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

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
        <Menu display={["block", "block", "none", "none"]}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant=""
            fontSize="2xl"
          />
          <MenuList bg="#1d2231" border="1px solid #242b3dbc">
            <Button colorScheme="#fff" variant="link" w="100%" py=".5rem">
              <Link to={"/"}>Home</Link>
            </Button>
            <Button colorScheme="#fff" variant="link" w="100%" py=".5rem">
              <Link to={"/form"}>Create Item</Link>
            </Button>
            <Button colorScheme="red" variant="link" w="100%" py=".5rem">
              <Link to={"/signup"}>Log out</Link>
            </Button>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
