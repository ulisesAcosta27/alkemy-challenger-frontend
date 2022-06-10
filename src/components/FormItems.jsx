import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import React from "react";

const FormItems = () => {
  return (
    <>
      <Box w={["100%", "90%", "90%", "80%"]} mx="auto" my="3rem">
        <Box w={["80%", "90%", "40rem", "50rem"]} mx="auto">
          <form>
            <FormControl py="1rem">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Buy rice..." />
            </FormControl>
            <Box pb="1rem">
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <NumberInput>
                <NumberInputField id="quantity" placeholder="5" />
              </NumberInput>
            </Box>
            <Box pb="1rem">
              <FormControl py="1rem">
                <FormLabel htmlFor="catalog">Catalog</FormLabel>
                <Select id="catalog" placeholder="Food">
                  <option>Casa</option>
                  <option>Inpuesto</option>
                  <option>Tiempo Libre</option>
                  <option>Ropa</option>
                </Select>
              </FormControl>
            </Box>
            <Box pb="1rem">
              <FormLabel as="legend">Catalog</FormLabel>
              <RadioGroup defaultValue="egress">
                <HStack spacing="24px">
                  <Radio value="incomes">Incomes</Radio>
                  <Radio value="egress">Egress</Radio>
                </HStack>
              </RadioGroup>
            </Box>
            <Button colorScheme="teal" size="md">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default FormItems;
