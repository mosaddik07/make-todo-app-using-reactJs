import { FormControl, Container, TextField, Button } from "@mui/material";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="I Will do this"
            required={true}
            size="small"
            variant="outlined"
            sx={{ marginTop: 3 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="contained" type="submit" sx={{ marginTop: 1, marginBottom: 6 }}>
            Add
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
