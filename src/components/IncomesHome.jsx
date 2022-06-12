import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import Cards from "./Cards";

const IncomesHome = () => {
  const [apiBudgetsIncomes, setApiBudgetsIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getApiBudget = async () => {
      try {
        const { data } = await axios.get(
          "https://alkemy-challenger-backend.vercel.app/budgets/incomes"
        );
        setApiBudgetsIncomes(data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getApiBudget();
  }, []);
  return (
    <>
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
            <Text fontSize="xl" p=".5rem">
              Incomes Operations
            </Text>
            <Box
              w="100%"
              h="auto"
              py="2rem"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-evenly"
            >
              <Cards item={apiBudgetsIncomes} setApiBudgetsIncomes={setApiBudgetsIncomes}/>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default IncomesHome;
