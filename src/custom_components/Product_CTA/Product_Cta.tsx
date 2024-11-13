import React from "react";
import PageWrapper from "../PageWraper";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import phone from "../../assets/phone2.avif";

// Create a motion component for the Image
const MotionImage = motion(Image);

const Product_Cta = () => {
  const imageWidth = useBreakpointValue({ base: 250, md: 350 });

  // Define the floating animation variants
  const floatVariants: Variants = {
    float: {
      y: [0, -15, 0], // Move up by 15px and then back to original
      transition: {
        duration: 3, // Duration of one float cycle
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      },
    },
  };

  return (
    <PageWrapper>
      <Box px={{ base: 5, md: 10 }}>
        <Flex
          bg={"rgb(251, 248, 233)"}
          h={"auto"}
          px={{ base: 5, md: 10 }}
          pt={{ base: 20, md: 35 }}
          pb={60}
          borderRadius={30}
          justifyContent={"space-between"}
          alignItems={"center"}
          position="relative"
          overflow="visible"
        >
          <Box w={{ base: "100%", md: "50%" }} spaceY={10} color={"rgb(0, 71, 55)"}>
            <Text fontSize={{ base: 30, md: 40 }} fontWeight={900} textWrap={"balance"}>
              Manage All Your Credit Cards in One Place.
            </Text>
            <Text fontSize={{ base: 16, md: 20 }}>
              Keep track of multiple credit cards effortlessly within the GreenBank app.
              Monitor balances, track transactions, and stay on top of payments without
              switching between different accounts.
            </Text>
          </Box>

          {/* Image Box with Framer Motion Floating Animation */}
          <Box
            w={{ base: "100%", md: "50%" }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <MotionImage
              w={imageWidth}
              src={phone}
              position="absolute"
              bottom={{ base: "-10px", md: "-300px" }}
              transform={{ base: "translateY(.1%)", md: "translateY(5%)" }}
              variants={floatVariants}
              animate="float"
            />
          </Box>
        </Flex>
      </Box>
    </PageWrapper>
  );
};

export default Product_Cta;
