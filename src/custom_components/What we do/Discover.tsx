import React from "react";
import PageWrapper from "../PageWraper";
import { Box, Spacer, Span, Text } from "@chakra-ui/react";

const Discover = () => {
  return (
    <PageWrapper>
      <Box w={"100%"} pb={40}>
        <Text
          textAlign={"center"}
          fontWeight={"Bold"}
          fontSize={{ base: 30, md: 50 }}
          color={"rgb(0, 71, 55)"}
        >
          Discover What We <Span color={"green.500"}>Offer</Span>
        </Text>
        <Spacer mt={10} />
        <Box  px={200} >
          <Text textAlign={"center"} textWrap={"pretty"} fontSize={20}>
            Elevate your e-commerce experience with our powerful feature set
            designed for unparalleled excellence.
          </Text>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Discover;
