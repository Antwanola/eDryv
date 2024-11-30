import PageWrapper from "../PageWraper";
import { Box, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";

const Discover = () => {
  // Use responsive font sizes based on breakpoints
  const fontSize = useBreakpointValue({ base: 20, md: 30, lg: 50 });
  const paddingX = useBreakpointValue({ base: 4, md: 16, lg: 40 });

  return (
    <PageWrapper>
      <Box w={"100%"} pb={10}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={fontSize}
          color={"rgb(0, 71, 55)"}
        >
          Discover What We <Text as="span" color={"green.500"}>Offer</Text>
        </Text>
        <Spacer mt={10} />
        <Box px={paddingX} w={"100%"}></Box>
      </Box>
    </PageWrapper>
  );
};

export default Discover;
