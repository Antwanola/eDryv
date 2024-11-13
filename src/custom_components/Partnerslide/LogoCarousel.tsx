import { Box, Flex } from "@chakra-ui/react";

const LogoCarousel = () => {
  return (
    <Box
      as="section"
    //   width="100%"
      overflow="hidden"
    //   position="relative"
      height="100px" /* Adjust height as needed */
    >
      <Flex
        as="ul"
        listStyleType="none"
        padding="0"
        margin="0"
        width="100%"
        height="100%"
        alignItems="center"
        gap="80px"
        justifyContent="space-around"
        animation="scroll 30s linear infinite"
        style={{
          willChange: "transform",
        }}
      >
        {/* Render SVG logos */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <Box
            as="li"
            key={idx}
            flexShrink="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100px"
            height="100px"
            style={{ imageRendering: "pixelated" }}
          >
            <Box
              as="svg"
              // viewBox="0 0 100 100"
              width="100%"
              height="100%"
              fill="currentColor"
              style={{ aspectRatio: "inherit" }}
            >
              {/* Replace this with your actual SVG paths */}
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="gray" />
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Duplicate the list for a seamless scroll effect */}
      <Flex
        as="ul"
        listStyleType="none"
        padding="0"
        margin="0"
        width="100%"
        height="100%"
        alignItems="center"
        gap="80px"
        justifyContent="space-around"
        animation="scroll 30s linear infinite"
        style={{
          willChange: "transform",
        }}
      >
        {/* Duplicate the logos */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <Box
            as="li"
            key={`duplicate-${idx}`}
            flexShrink="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100px"
            height="100px"
            style={{ imageRendering: "pixelated" }}
          >
            <Box
              as="svg"
              // viewBox="0 0 100 100"
              width="100%"
              height="100%"
              fill="currentColor"
              style={{ aspectRatio: "inherit" }}
            >
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="gray" />
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LogoCarousel;
