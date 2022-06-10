import React, { useEffect, useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import Cards from "./Cards";

const EgressHome = () => {
  const [apiBudgetsEgress, setApiBudgetsEgress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getApiBudget = async () => {
      try {
        const { data } = await axios.get(
          "https://alkemy-challenger-backend.vercel.app/budgets/egress"
        );
        setApiBudgetsEgress(data);
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
              Egress Operations
            </Text>
            <Cards item={apiBudgetsEgress} />
          </>
        )}
      </Box>
    </>
  );
};

export default EgressHome;
