import { Button } from "@chakra-ui/react";

type Props = {
  onFilterByAll: () => void;
  onFilterByActive: () => void;
  onFilterByCompleted: () => void;
};

const Sort = (props: Props) => {
  return (
    <>
      <Button
        bg="inherit"
        _hover={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        _focus={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        p={0}
        onClick={props.onFilterByAll}
        marginInlineEnd="1rem"
      >
        All
      </Button>
      <Button
        _hover={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        _focus={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        bg="inherit"
        p={0}
        onClick={props.onFilterByActive}
      >
        Active
      </Button>
      <Button
        _hover={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        _focus={{ bg: "inherit", color: "hsl(220, 98%, 61%)" }}
        bg="inherit"
        p={0}
        marginInlineStart="1rem"
        onClick={props.onFilterByCompleted}
      >
        Completed
      </Button>
    </>
  );
};

export default Sort;
