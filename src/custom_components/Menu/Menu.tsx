import { Box, Flex, Link } from "@chakra-ui/react";
import { MenuType } from "../../Utils/types";

// Define the properties for the padding wrapper, extending Chakra BoxProps

// Create the PaddingWrapper component
const Menu = () => {
  const menuItems: Array<MenuType> = [
    {
      menuName: "Home",
      menuUrl: "/home",
    },
    {
      menuName: "Features",
      menuUrl: "/features",
    },
    {
      menuName: "How It Works",
      menuUrl: "/how_it_works",
    },
    {
      menuName: "Testimonials",
      menuUrl: "/testimonials",
    },
  ];
  return (
    <Box>
      <Flex >
        {menuItems.map((menu) => (
          <Link
            variant="plain"
            key={menu.menuName}
            as="a"
            href={menu.menuUrl}
            mx={2}
            cursor={"pointer"}
            _hover={{ color: "green.600", textDecoration: "none" }}
            fontWeight={600}
            fontSize={16}
          >
            {menu.menuName}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Menu;
