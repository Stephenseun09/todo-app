import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TodosCtx } from "../../store/todos-ctx";
import Colors from "../ui/Colors";
import Sort from "./Sort";

const Bottom = () => {
  const todoCtx = useContext(TodosCtx);
  const todoBg = Colors().todoBg;
  const uncompletedTodo = todoCtx.todos.filter(
    (todo) => !todo.isCompleted
  ).length;
  return (
    <Box>
      <Flex
        minH="65px"
        bg={todoBg}
        alignItems="center"
        justifyContent="space-between"
        px="1.5rem"
        flexGrow={1}
        // boxShadow="0 0 12px 0px rgba(0,0,0,0.15)"
        boxShadow="0 0 8px 5px rgba(0,0,0,0.05), rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
        borderBottomRadius="0.375rem"
      >
        <Box opacity={!todoCtx.todos.length ? "0.5" : "1"}>
          {uncompletedTodo} items left
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Sort
            onFilterByAll={todoCtx.filterByAll}
            onFilterByActive={todoCtx.filterByActive}
            onFilterByCompleted={todoCtx.filterByCompleted}
          />
        </Box>
        <Box
          opacity={!todoCtx.todos.length ? "0.5" : "1"}
          cursor="pointer"
          onClick={todoCtx.clearCompleted}
        >
          Clear Completed
        </Box>
      </Flex>

      <Flex
        display={{ base: "flex", md: "none" }}
        minH="65px"
        bg={todoBg}
        alignItems="center"
        justifyContent="space-between"
        px="1.5rem"
        boxShadow="0 5px 12px 0px rgba(0,0,0,0.05)"
        marginBlockStart="4rem"
        borderBottomEndRadius="5px"
        borderRadius="md"
      >
        <Sort
          onFilterByAll={todoCtx.filterByAll}
          onFilterByActive={todoCtx.filterByActive}
          onFilterByCompleted={todoCtx.filterByCompleted}
        />
      </Flex>
    </Box>
  );
};

export default Bottom;
