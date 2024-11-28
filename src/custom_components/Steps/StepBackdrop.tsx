import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Wrap Chakra components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const StepBackdrop = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box bg="rgb(86, 240, 159)" p={10} textAlign="center">
      {/* Animate Heading */}
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        mb={5}
      >
        <Heading as="h2" size="lg">
          Get Started in Just 3 Simple Steps
        </Heading>
      </MotionBox>

      {/* Animate Flex container */}
      <MotionFlex
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        gap={10}
      >
        <Step
          number="1"
          title="Sign Up"
          description="Create your account in just a few minutes."
          imageSrc="/path-to-image1.png"
          animation={fadeIn}
        />
        <Step
          number="2"
          title="Customize"
          description="Tailor your setup to your specific needs."
          imageSrc="/path-to-image2.png"
          animation={fadeIn}
        />
        <Step
          number="3"
          title="Start"
          description="Begin using the platform immediately."
          imageSrc="/path-to-image3.png"
          animation={fadeIn}
        />
      </MotionFlex>
    </Box>
  );
};

const Step = ({ number, title, description, imageSrc, animation }) => (
  <MotionFlex
    direction="column"
    align="center"
    bg="white"
    p={5}
    shadow="md"
    rounded="lg"
    variants={animation}
  >
    <Image src={imageSrc} alt={title} boxSize="80px" mb={3} />
    <Heading as="h3" size="md" mb={2}>
      {number}. {title}
    </Heading>
    <Text>{description}</Text>
  </MotionFlex>
);

export default StepBackdrop;
