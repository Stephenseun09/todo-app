import { useColorModeValue } from "@chakra-ui/react";

const Colors = () => {
  const fontColor = useColorModeValue(
    "hsl(236, 9%, 61%)",
    "hsl(234, 39%, 85%)"
  );
  const fontColorHover = useColorModeValue("hsl(235, 21%, 11%)", "#fff");
  const todoShadow = useColorModeValue(
    "hsl(236deg 9% 61% / 15%)",
    "hsl(234deg 39% 85% / 15%)"
  );
  const mainBg = useColorModeValue("#003399", "#ffffff");
  const todoBg = useColorModeValue("hsl(0, 0%, 98%)", "hsl(235, 24%, 19%)");
  const listFontColor = useColorModeValue(
    "hsl(235, 19%, 35%)",
    "hsl(233, 14%, 35%)"
  );

  return {
    fontColor,
    fontColorHover,
    todoShadow,
    mainBg,
    todoBg,
    listFontColor,
  };
};

export default Colors;
