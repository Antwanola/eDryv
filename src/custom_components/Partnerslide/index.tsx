import { Box, Flex, Text } from '@chakra-ui/react'
import PageWrapper from '../PageWraper'
import LogoCarousel from './LogoCarousel'

 const  PartnerSlide = () =>  {
  return (
   <PageWrapper mt={50}>
    <Flex
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="space-between"
  wrap="wrap"
  p={5}
>
  {/* Text Box */}
  <Box w={{ base: "100%", md: "50%" }}>
    <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} maxW="100%">
      WE ARE PARTNERED WITH MORE THAN 50+ companies around the globe.
    </Text>
  </Box>

  {/* Logo Carousel */}
  <Box
    w={{ base: "100%", md: "50%" }}
    overflow="hidden"
    position="relative"
    p={{ base: 3, md: 5 }}
  >
    <LogoCarousel />
  </Box>
</Flex>
   </PageWrapper>
  )
}


export default PartnerSlide