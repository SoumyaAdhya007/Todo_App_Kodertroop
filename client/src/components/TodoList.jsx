import { useEffect, useState } from "react";
import {
  Box,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getTodos, deleteTodo, searchTodo } from "../service/api";
const TodoListBox = styled(Box)`
  width: 68%;
  margin: 0;
  min-width: 450px;
  height: auto;
`;

const TodoTableHead = styled(TableHead)`
  background: #1c2130;
`;
const TodoHeadeCell = styled(TableCell)`
  color: #ffffff;
`;
const Component = styled(Box)`
  ${"" /* background-color: #202c33; */}
  border:1px solid #202c33;
  height: 45px;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Wrapper = styled(Box)`
  ${"" /* background-color: #f0f2f5; */}
  width: 100%;
  position: relative;
  margin: 0 12px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  color: #717e85;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding-left: 10%;
  height: 15px;
  color: #1c2130;
`;

const TodoList = ({ value }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos();
      setAllTodos(response);
    };
    fetchData();
  }, [value]);

  const handleDelete = async (id) => {
    const response = await deleteTodo(id);
    if (response.status === 204) {
      setAllTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    }
  };
  const search = async (event) => {
    if (event.which === 13) {
      const response = await searchTodo(searchText);
      setAllTodos(response);
    }
  };
  return (
    <TodoListBox>
      <Component>
        <Wrapper>
          <Icon>
            <SearchIcon />
          </Icon>
          <InputField
            placeholder="Seacrh..."
            onKeyPress={(event) => search(event)}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </Wrapper>
      </Component>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TodoTableHead>
            <TableRow>
              <TodoHeadeCell>SL</TodoHeadeCell>
              <TodoHeadeCell>Title</TodoHeadeCell>
              <TodoHeadeCell>Description</TodoHeadeCell>
              <TodoHeadeCell align="right">Delete</TodoHeadeCell>
            </TableRow>
          </TodoTableHead>
          <TableBody>
            {allTodos.map((row, i) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  {row.description ? row.description : "No description"}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handleDelete(row._id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TodoListBox>
  );
};
export default TodoList;
