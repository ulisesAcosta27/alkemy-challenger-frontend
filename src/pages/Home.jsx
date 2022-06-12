import React, { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SummaryOperations from "../components/SummaryOperations";
import axios from "axios";
import Cards from "../components/Cards";

const Home = () => {
  const [apiBudgets, setApiBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getApiBudget = async () => {
      try {
        const { data } = await axios.get(
          "https://alkemy-challenger-backend.vercel.app/budgets"
        );
        setApiBudgets(data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getApiBudget();
  }, []);
  return (
    <>
      <Navbar />
      <Box
        w={["90%", "80%", "80%", "80%"]}
        mx="auto"
        my="3rem"
        textAlign="center"
      >
        {!isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <SummaryOperations apiBudgets={apiBudgets} />
            <Box
              w="100%"
              h="auto"
              py="2rem"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-evenly"
            >
              <Cards item={apiBudgets} setApiBudgets={setApiBudgets} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
