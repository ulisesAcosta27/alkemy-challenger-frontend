import { Box, Text } from "@chakra-ui/react";
import React from "react";

const EgressHome = () => {
  return (
    <>
      <Box
        w={["90%", "80%", "80%", "80%"]}
        mx="auto"
        my="3rem"
        textAlign="center"
      >
        <Text fontSize="xl" p=".5rem">
          Egress Operations
        </Text>
      </Box>
    </>
  );
};

export default EgressHome;
