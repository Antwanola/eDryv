// src/theme.ts
import { type ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";


// Explicitly define the config type
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Define the theme extension directly
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Bozon', sans-serif`,
    body: `'Bozon', sans-serif`,
  },
  styles: {
    global: {
      "@font-face": [
        {
          fontFamily: "Bozon",
          src: `
            url('/fonts/Bozon_bold.otf') format('opentype'),
            url('/fonts/Bozon_regular.otf') format('opentype')
          `,
          fontWeight: "normal",
          fontStyle: "normal",
        },
      ],
    },
  },
});

export default theme;
