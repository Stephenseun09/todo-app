import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  ...base.styles,
  global: (props) => ({
    body: {
      font: "400 18px/1 'Josefin Sans', sans-serf",
      color: mode("hsl(236, 9%, 61%)", "hsl(234, 39%, 85%)")(props),
      fontSize: { base: "14.5px", md: "16px", lg: "18px" },
      bg: mode("hsl(0, 0%, 98%)", "hsl(235, 21%, 11%)")(props),
      bgSize: "contain",
      // lineHeight: "175%",
    },
  }),
};

// const components = {
//   components: {
//     ...base.components,
//     Button: {
//       ...base.components.Button,

//     }

//   }
// }

const theme = extendTheme({
  config,
  styles,
});

export default theme;
