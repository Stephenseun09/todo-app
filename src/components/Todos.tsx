import React, { useContext } from "react";
import { TodosCtx } from "../store/todos-ctx";
import TodoItem from "./TodoItem";
import { Box, Flex } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Colors from "./ui/Colors";

const Todos = () => {
  const todoCtx = useContext(TodosCtx);
  const todoShadow = Colors().todoShadow;
  const todoBg = Colors().todoBg;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add: any;
    let active = todoCtx.todos;
    // Source Logic
    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    }
    if (!add) {
      return;
    } else {
      todoCtx.setTodos(active);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box boxShadow="0 -10px 12px 0px rgba(0,0,0,0.2)">
        <Droppable droppableId="TodoList">
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              marginBlockStart="1.5rem"
            >
              <Flex
                as="ul"
                direction="column"
                borderTopRadius="0.375rem"
                overflow="hidden"
              >
                {todoCtx.todos.map((todo, index) => (
                  <TodoItem
                    index={index}
                    text={todo.text}
                    onDelete={todoCtx.removeTodo.bind(null, todo.id)}
                    onComplete={todoCtx.completeTodo.bind(null, todo.id)}
                    isCompleted={todo.isCompleted}
                    key={todo.id + index}
                  />
                ))}

                {provided.placeholder}
                {!todoCtx.todos.length && (
                  <Flex
                    minH="65px"
                    bg={todoBg}
                    alignItems="center"
                    justifyContent="center"
                    px="1rem"
                    flexGrow={1}
                    borderBlockEnd={`2px solid ${todoShadow}`}
                  >
                    {!todoCtx.todos.length &&
                      !todoCtx.showActive &&
                      !todoCtx.showCompleted && <p>No Todos available</p>}
                    {todoCtx.showActive && !todoCtx.todos.length && (
                      <p>No Active Todos</p>
                    )}
                    {todoCtx.showCompleted && !todoCtx.todos.length && (
                      <p>No Completed Todos</p>
                    )}
                  </Flex>
                )}
              </Flex>
            </Box>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
};

export default Todos;
