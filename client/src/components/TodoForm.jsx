import {
  Box,
  FormControl,
  TextField,
  styled,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

// import { LoadingButton } from "@mui/lab";
import { createTodo } from "../service/api";
const TodoFormBox = styled(Box)`
  width: 28%;
  min-width: 300px;
  margin-top: 10px;
`;
const TodoInput = styled(TextField)`
  margin: 5px auto;
  width: 100%;
`;
const TodoFormControl = styled(FormControl)`
  width: 100%;
`;
const TodoForm = ({ setValue }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setError(true);
      return;
    }
    setLoading(true);
    const todoData = { title };
    if (description) {
      todoData.description = description;
    }
    const response = await createTodo(todoData);
    if (response.status === 200) {
      setValue({ ...response.data });
    }

    setLoading(false);
    setTitle("");
    setDescription("");
  };

  return (
    <TodoFormBox>
      <form onSubmit={handleSubmit}>
        <TodoFormControl>
          <TodoInput
            required
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            error={error}
            onChange={(e) => {
              // setError(false);
              setTitle(e.target.value);
            }}
          />
          <TodoInput
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            endIcon={loading && <CircularProgress size={20} />}
          >
            Submit
          </Button>
        </TodoFormControl>
      </form>
    </TodoFormBox>
  );
};

export default TodoForm;
