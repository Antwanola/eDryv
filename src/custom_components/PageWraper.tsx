import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

// Define the properties for the padding wrapper, extending Chakra BoxProps
interface PaddingWrapperProps extends BoxProps {
  children: React.ReactNode;
}

// Create the PaddingWrapper component
const PageWrapper: React.FC<PaddingWrapperProps> = ({ children, ...props }) => {
  return (
    <Box px={{ base: '4', md: '6', lg: '8' }} py={{ base: '4', md: '4', lg: '4' }} {...props}>
      {children}
    </Box>
  );
};

export default PageWrapper;
