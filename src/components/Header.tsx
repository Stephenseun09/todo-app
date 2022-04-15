import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Header = () => {
  return (
    <Flex justify="space-between" my="2rem">
      <Heading
        as="h1"
        fontWeight="700"
        fontSize="2.5rem"
        color="#fff"
        letterSpacing="1rem"
      >
        TODO
      </Heading>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
