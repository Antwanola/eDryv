import { Box, Flex, IconButton, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import main from "../../assets/Folti_Mockups/Main.png";
import AvatarComp from "../AvatarGroup";
import PageWrapper from "../PageWraper";

const Hero = () => {
  // Responsive styles using Chakra's useBreakpointValue
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "start", md: "left" });
  const containerWidth = useBreakpointValue({ base: "100%", md: "50%" });
  const imageWidth = useBreakpointValue({ 
  base: 300,    // Small mobile devices
  sm: 350,      // Slightly larger mobile
  md: 500,      // Tablet and up
  lg: 600,      // Larger screens
  xl: 700       // Extra large screens
  });
  const spacing = useBreakpointValue({ base: 5, md: 8 });
  const marginLeft = useBreakpointValue({ base: 0, md: 40 });
  
  return (
    <PageWrapper
    bgGradient=" linear-gradient(
      180deg,
      #fefffc 0%,
      rgba(255, 255, 255, 1) 46.1%,
      rgba(86, 240, 159, 1) 100%
  );"
  borderRadius={80}
  maxH={'auto'}
    >
    <Box mt={10} px={4}

  >
      <Flex
        flexDirection={flexDirection}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        {/* Text Section */}
        <VStack w={containerWidth} alignItems={{ base: "start", md: "flex-start" }}  gap={spacing}>
          <Box>
            <Text
              wordBreak="break-word"
              fontSize={{ base: 30, md: 50 }}
              fontWeight={1400}
              color="#004737"
              lineHeight={1.6}
              textAlign={textAlign}
            >
              Move Smarter, Go Your <Text as="span" color="green.300">Electric</Text>.
            </Text>
          </Box>

          <Box>
            <Text fontWeight={100} fontSize={{ base: 16, md: 20 }} textAlign={textAlign}>
              Join thousands of riders switching to cleaner, greener trips with
              <Text as="span" fontWeight="bold" color="green.300">eDryv</Text>.
              Download the app now and experience rides in our all new electric vehicles.
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
            <Text>1k+ Downloads</Text>
          </Flex>
        </VStack>

        {/* Image Section */}
        <VStack ml={marginLeft} mt={{ base: 5, md: 0 }}>
          <Image
            src={main}
            alt="Mockup Image"
            w={imageWidth}
          />
        </VStack>
      </Flex>
    </Box>
    </PageWrapper>
  );
};

export default Hero;
