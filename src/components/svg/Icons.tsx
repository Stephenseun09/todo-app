import { Box, Icon } from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";

export const Checked = () => {
  return <Icon color="#fff" as={AiOutlineCheck} w="100%" h="100%" />;
};

export const Delete = () => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      cursor="pointer"
    >
      <path
        fill="#494C6B"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </Box>
  );
};
