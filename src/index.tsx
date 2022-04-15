import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import TodoCtxProvider from "./store/todos-ctx";
import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <TodoCtxProvider>
      <App />
    </TodoCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
