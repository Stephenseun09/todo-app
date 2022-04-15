import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import AddNewTodo from "./components/AddNewTodo";
import Todos from "./components/Todos";
import theme from "./styles/theme";

import bgDesktopDark from "./assets/bg-desktop-dark.jpg";
import bgDesktopLight from "./assets/bg-desktop-light.jpg";
import bgMobileDark from "./assets/bg-mobile-dark.jpg";
import bgMobileLight from "./assets/bg-mobile-light.jpg";
import Footer from "./components/Footer";

export const App = () => {
  const bgDesktop = useColorModeValue(bgDesktopLight, bgDesktopDark);
  const bgMobile = useColorModeValue(bgMobileLight, bgMobileDark);

  return (
    <ChakraProvider theme={theme}>
      <Box pos="relative">
        <Box
          w="100%"
          h="16rem"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          bgImage={{
            base: `url('${bgMobile}')`,
            md: `url(${bgDesktop})`,
          }}
          pos="absolute"
          top="0"
          left="0"
          zIndex="-1"
        />

        <Box p="2rem" maxW="767px" m="0 auto">
          <Header />
          <AddNewTodo />
          <Todos />
          <Bottom />
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
