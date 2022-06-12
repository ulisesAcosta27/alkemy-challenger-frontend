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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormItems = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isCreatingItem, setIsCreatingItem] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitItem, setSubmitItem] = useState({
    name: "",
    quantity: "",
    catalog: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(
        `https://alkemy-challenger-backend.vercel.app/budgets/${params.id}`,
        submitItem)
    } else {
      await axios.post(
        `https://alkemy-challenger-backend.vercel.app/budgets/${1}`,
        submitItem
      );
    }
    setIsCreatingItem(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setSubmitItem({ ...submitItem, [e.target.name]: e.target.value });
  };

  const loadItems = async (id) => {
    const { data } = await axios.get(
      `https://alkemy-challenger-backend.vercel.app/budgets/${id}`
    );
    setSubmitItem({
      name: data.name,
      quantity: data.quantity,
      catalog: data.catalog,
      type: data.type,
    });
    setIsEditing(true)
  };

  useEffect(() => {
    if (params.id) {
      loadItems(params.id);
    }
  }, [params.id]);

  return (
    <>
      <Box w={["100%", "90%", "90%", "80%"]} mx="auto" my="3rem">
        <Box w={["80%", "90%", "40rem", "50rem"]} mx="auto">
          <form onSubmit={handleSubmit}>
            <FormControl py="1rem">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Buy rice..."
                name="name"
                value={submitItem.name}
                onChange={handleChange}
              />
            </FormControl>
            <Box pb="1rem">
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <NumberInput value={submitItem.quantity}>
                <NumberInputField
                  id="quantity"
                  placeholder="5"
                  name="quantity"
                  
                  onChange={handleChange}
                />
              </NumberInput>
            </Box>
            <Box pb="1rem">
              <FormControl py="1rem">
                <FormLabel htmlFor="catalog">Catalog</FormLabel>
                <Select
                  id="catalog"
                  placeholder="Food"
                  name="catalog"
                  value={submitItem.catalog}
                  onChange={handleChange}
                >
                  <option>Tax</option>
                  <option>Food</option>
                  <option>House</option>
                  <option>Free Time</option>
                  <option>Clothes</option>
                </Select>
              </FormControl>
            </Box>
            <Box pb="1rem">
              <FormLabel>Type</FormLabel>
              <RadioGroup defaultValue="egress" value={submitItem.type}>
                <HStack spacing="24px">
                  <Radio name="type" value="Incomes" onChange={handleChange}>
                    Incomes
                  </Radio>
                  <Radio name="type" value="Egress" onChange={handleChange}>
                    Egress
                  </Radio>
                </HStack>
              </RadioGroup>
            </Box>
            {!isCreatingItem ? (
              <Spinner size="xl" />
            ) : (
              <Button colorScheme="teal" size="md" type="submit">
                Submit
              </Button>
            )}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default FormItems;
