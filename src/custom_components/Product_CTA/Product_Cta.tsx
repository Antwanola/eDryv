
import PageWrapper from "../PageWraper";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";


// Create a motion component for the Image
const MotionImage = motion(Image);

interface Product_CtaTypes {
  colour: string;
  title: string;
  text: string;
  image: string;
}

const Product_Cta: React.FC<Product_CtaTypes> = ({ colour, title, text, image}) => {
  const imageWidth = useBreakpointValue({ base: 150, md: 250 });

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
      <Box px={{ base: 5, md: 10 }} py={{base: 5, md: 20}}>
        <Flex
          bg={colour}
          h={"auto"}
          px={{ base: 5, md: 20 }}
          pt={{ base: 20, md: 35 }}
          pb={{ base: 0, md: 40}}
          direction={{base: "column", md: "row"}}
          borderRadius={30}
          justifyContent={"space-between"}
          alignItems={"center"}
          position="relative"
          overflow="visible"
        >
          <Box w={{ base: "100%", md: "50%" }} spaceY={10} color={"rgb(0, 71, 55)"}>
            <Text fontSize={{ base: 30, md: 40 }} fontWeight={900} textWrap={"balance"}>
              {title}
            </Text>
            <Text fontSize={{ base: 16, md: 20 }}>
             {text}
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
              src={image}
              position={{base: "relative", md: "absolute"}}
              bottom={{ base: "-10px", md: "-200px" }}
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