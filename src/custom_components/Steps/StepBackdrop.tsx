import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";

const StepBackdrop = () => {
  return (
    <Box
      as="section"
      bg="gray.50"
      py="6"
      px="4"
      textAlign="center"
      color="#rgb(86, 240, 159)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="6xl"
        mx="auto"
        gap="6"
        
      >
        {/* Left Content */}
        <Box flex="1" textAlign={{ base: "center", md: "left" }} >
          <Heading fontSize={{ base: "2xl", md: "4xl" }} mb="4">
            New Section
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Add description
          </Text>
        </Box>

        {/* Right Content (Image or Media) */}
        <Box flex="1">
          <Image
            src="/path-to-your-image.jpg"
            alt="Descriptive Alt Text"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default StepBackdrop;
