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
import axios from "axios";
import React, { useState } from "react";

const FormItems = () => {
  const [submit, setSubmit] = useState({
    name: '',
    quantity: '',
    catalog: '',
    type: '',
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://alkemy-challenger-backend.vercel.app/budgets/${1}`, submit)
  }
  const handleChange = (e) => {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Box w={["100%", "90%", "90%", "80%"]} mx="auto" my="3rem">
        <Box w={["80%", "90%", "40rem", "50rem"]} mx="auto">
          <form onSubmit={handleSubmit}>
            <FormControl py="1rem">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Buy rice..." name="name" onChange={handleChange}/>
            </FormControl>
            <Box pb="1rem">
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <NumberInput>
                <NumberInputField id="quantity" placeholder="5" name="quantity" onChange={handleChange}/>
              </NumberInput>
            </Box>
            <Box pb="1rem">
              <FormControl py="1rem">
                <FormLabel htmlFor="catalog">Catalog</FormLabel>
                <Select id="catalog" placeholder="Food" name="catalog" onChange={handleChange}>
                  <option>Food</option>
                  <option>House</option>
                  <option>Free Time</option>
                  <option>Clothes</option>
                </Select>
              </FormControl>
            </Box>
            <Box pb="1rem">
              <FormLabel>Type</FormLabel>
              <RadioGroup defaultValue="egress">
                <HStack spacing="24px">
                  <Radio name="type" value="incomes" onChange={handleChange}>Incomes</Radio>
                  <Radio name="type" value="egress" onChange={handleChange}>Egress</Radio>
                </HStack>
              </RadioGroup>
            </Box>
            <Button colorScheme="teal" size="md" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default FormItems;
