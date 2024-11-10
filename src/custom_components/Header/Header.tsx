import PageWrapper from "../PageWraper";
import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/Logo.png";
import Menu from "../Menu/Menu";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "../Menu/MobileMenu/MobileMenuContent";
import { MdOutlineSupportAgent } from "react-icons/md";

interface HeaderProp {
  menu: string;
}
// Create the PaddingWrapper component
const Header: React.FC<HeaderProp> = () => {
  return (
    <>
      <PageWrapper>
        <Container>
          <Flex align={"center"} justifyContent={"space-between"}>
            <Box>
              <Image src={Logo} alt="Logo" width="10" height="auto" />
            </Box>
            <Box alignContent={"start"} display={{ base: "none", md: "block" }}>
              <Menu />
            </Box>
            <Box display={{base: "none", md: "block" }}>
              <Button borderRadius={"30px"} p={5}>
                <MdOutlineSupportAgent/> Support
              </Button>
            </Box>
            <Box display={{ base: "block", md: "none" }}>
              <MobileMenu />
            </Box>
          </Flex>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Header;
