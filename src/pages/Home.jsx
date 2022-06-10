import React, { useEffect, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import ItemCards from "../components/ItemCards";
import Navbar from "../components/Navbar";
import SummaryOperations from "../components/SummaryOperations";
import axios from "axios";

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
      <Box w={["90%", "80%", "80%", "80%"]} mx="auto" my="3rem" textAlign='center'>
        {!isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <SummaryOperations apiBudgets={apiBudgets} />
            <ItemCards apiBudgets={apiBudgets} />
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
