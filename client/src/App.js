import "./App.css";
import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const Main = styled(Box)`
  width: 90%;
  height: 90vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Heading = styled(Typography)`
  font-size: 50px;
  text-align: center;
`;
function App() {
  const [value, setValue] = useState({});
  return (
    <>
      <Heading>TODO APP</Heading>

      <Main>
        <TodoForm setValue={setValue} />
        <TodoList value={value} />
      </Main>
    </>
  );
}

export default App;
