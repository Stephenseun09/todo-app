import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { TodosCtx } from "../store/todos-ctx";
import Colors from "./ui/Colors";

const AddNewTodo = () => {
  const fontColor = Colors().fontColor;
  const todoCtx = useContext(TodosCtx);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const todoBg = Colors().todoBg;
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = inputRef.current!.value;
    if (enteredTodo.trim().length !== 0) {
      todoCtx.addTodo(enteredTodo);
    }
    formRef.current?.reset();
  };
  return (
    <Flex
      width="100%"
      bg={todoBg}
      borderRadius="md"
      gap="5px"
      alignItems="center"
      px="1.5rem"
    >
      <Box
        as="span"
        w="20px"
        h="20px"
        border={`1px solid ${fontColor}`}
        borderRadius="50%"
      />
      <Box flexGrow={1}>
        <form onSubmit={addTodoHandler} ref={formRef}>
          <Input
            placeholder="Create a new todo..."
            variant="filled"
            bg={todoBg}
            w="100%"
            ref={inputRef}
            type="text"
            name="todo"
            size="lg"
            _hover={{
              border: "none",
              outline: "none",
            }}
            _focus={{
              border: "none",
              outline: "none",
            }}
          />
        </form>
      </Box>
    </Flex>
  );
};

export default AddNewTodo;
