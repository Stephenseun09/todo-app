import React, { createContext, useEffect, useState } from "react";
import Todo from "../models/Todo";

export type TodoCtxType = {
  todos: Todo[];
  addTodo: (enteredTodo: string) => void;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  showActive: boolean;
  showCompleted: boolean;
  filterByActive: () => void;
  filterByCompleted: () => void;
  filterByAll: () => void;
  clearCompleted: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodosCtx = createContext<TodoCtxType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  completeTodo: () => {},
  showActive: false,
  showCompleted: false,
  filterByActive: () => {},
  filterByCompleted: () => {},
  filterByAll: () => {},
  clearCompleted: () => {},
  setTodos: () => {},
});

const TodoCtxProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showActive, setShowActive] = useState<boolean>(false);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    const items = savedItems !== null ? JSON.parse(savedItems) : [];
    if (items) {
      setTodos(items);
    }
  }, []);

  const addTodoHandler = (enteredTodo: string) => {
    const TodoItem = { id: enteredTodo, text: enteredTodo, isCompleted: false };
    setTodos((prevTodos) => {
      return [...prevTodos, TodoItem];
    });
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const removeTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const filterByActiveHandler = () => {
    setShowActive(true);
    setShowCompleted(false);
  };
  const filterByCompletedHandler = () => {
    setShowCompleted(true);
    setShowActive(false);
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
    // setShowCompleted(false);
    // setShowActive(false);
  };
  const filterByAll = () => {
    setShowCompleted(false);
    setShowActive(false);
  };

  const handleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  let filteredTodos: Todo[];
  // const setTodos = todoCtx.setTodos;
  if (showActive) {
    filteredTodos = todos.filter((todo) => !todo.isCompleted);
  } else if (showCompleted) {
    filteredTodos = todos.filter((todo) => todo.isCompleted);
  } else {
    filteredTodos = todos;
  }

  const todoCtxValue = {
    todos: filteredTodos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    completeTodo: handleComplete,
    filterByAll,
    showActive,
    showCompleted,
    clearCompleted: clearCompleted,
    filterByActive: filterByActiveHandler,
    filterByCompleted: filterByCompletedHandler,
    setTodos,
  };

  return <TodosCtx.Provider value={todoCtxValue}>{children}</TodosCtx.Provider>;
};

export default TodoCtxProvider;
