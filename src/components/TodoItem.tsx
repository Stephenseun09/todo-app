import { Box, Grid } from "@chakra-ui/react";

import { Checked, Delete } from "./svg/Icons";
import { Draggable } from "react-beautiful-dnd";
import Colors from "./ui/Colors";

type Todo = {
  index: number;
  text: string;
  isCompleted: boolean;
  onDelete: () => void;
  onComplete: () => void;
};

const TodoItem: React.FC<Todo> = ({
  index,
  text,
  onDelete,
  onComplete,
  isCompleted,
}) => {
  const todoBg = Colors().todoBg;
  const fontColor = Colors().fontColor;
  const todoShadow = Colors().todoShadow;
  const listFontColor = Colors().listFontColor;
  return (
    <Draggable draggableId={text + index} index={index}>
      {(provided, snapshot) => (
        <Box
          as="li"
          listStyleType="none"
          minH="65px"
          bg={todoBg}
          display="flex"
          alignItems="center"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          boxShadow={
            snapshot.isDragging
              ? "0px 0px 10px rgba(0,0,0,0.3)"
              : "0px 0px 0px rgba(0,0,0,0.8)"
          }
          borderBlockEnd={`2px solid ${todoShadow}`}
        >
          <Box
            as="span"
            display="flex"
            justifyContent="space-between"
            px="1.5rem"
            flexGrow={1}
          >
            <Grid
              onClick={onComplete}
              as="span"
              w="20px"
              h="20px"
              border={`1px solid ${fontColor}`}
              bgImage={
                !isCompleted
                  ? "transparent"
                  : "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
              }
              cursor="pointer"
              borderRadius="50%"
              px="3px"
              py="3px"
              alignSelf="center"
            >
              {isCompleted && <Checked />}
            </Grid>
            <Box
              flexBasis="87%"
              marginInlineStart={5}
              alignSelf="center"
              fontWeight="500"
              opacity={isCompleted ? "0.5" : "1"}
            >
              {isCompleted ? (
                <s color={listFontColor}>{text}</s>
              ) : (
                <p color={listFontColor}>{text}</p>
              )}
            </Box>

            <Box
              w="max-content"
              h="max-content"
              as="span"
              onClick={onDelete}
              px="8px"
              py="5px"
              cursor="pointer"
            >
              <Delete />
            </Box>
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default TodoItem;
