import { Box, Flex, IconButton, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import moc from "../../assets/moc.png";
import AvatarComp from "../AvatarGroup";

const Hero = () => {
  // Responsive styles using Chakra's useBreakpointValue
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "start", md: "left" });
  const containerWidth = useBreakpointValue({ base: "100%", md: "50%" });
  const imageWidth = useBreakpointValue({ base: 250, md: 250 });
  const spacing = useBreakpointValue({ base: 5, md: 8 });
  const marginLeft = useBreakpointValue({ base: 0, md: 40 });
  
  return (
    <Box mt={10} px={4}>
      <Flex
        flexDirection={flexDirection}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        {/* Text Section */}
        <VStack w={containerWidth} alignItems={{ base: "start", md: "flex-start" }} spacing={spacing} gap={spacing}>
          <Box>
            <Text
              wordBreak="break-word"
              fontSize={{ base: 30, md: 50 }}
              fontWeight={700}
              color="#004737"
              lineHeight={1.6}
              textAlign={textAlign}
            >
              Empower Your <Text as="span" color="green.300">Finances</Text> For A Brighter Future.
            </Text>
          </Box>

          <Box>
            <Text fontWeight={100} fontSize={{ base: 16, md: 20 }} textAlign={textAlign}>
              Streamline your payments with GreenBank. Instant bank transfers, hassle-free bill payments, and more – all at your fingertips.
            </Text>
          </Box>

          {/* Buttons Section */}
          <Flex gap={spacing} flexDirection={{ base: "column", md: "row" }} alignItems="center">
            <IconButton
              borderRadius={30}
              p={5}
              aria-label="Download for iOS"
              color="white"
              _hover={{ bg: "green.500" }}
            >
              <FaApple />Download Now
            </IconButton>
            <IconButton
              borderRadius={30}
              p={5}
              aria-label="Download for Android"
              color="white"
              _hover={{ bg: "green.500" }}
            >
              <DiAndroid />Download Now
            </IconButton>
          </Flex>

          {/* Avatar Section */}
          <Flex gap={3} alignItems="center" justifyContent={{ base: "center", md: "flex-start" }}>
            <AvatarComp />
            <Text>Over 200k users</Text>
          </Flex>
        </VStack>

        {/* Image Section */}
        <VStack ml={marginLeft} mt={{ base: 5, md: 0 }}>
          <Image
            src={moc}
            alt="Mockup Image"
            w={imageWidth}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Hero;
