import { Delete, PanoramaFishEye, TaskAlt } from "@mui/icons-material";
import { Card, CardContent, Container, IconButton, Typography } from "@mui/material";

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
  const handleChecked = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" };

  return (
    <div>
      <Container>
        <Card variant="outlined" sx={{ marginTop: 1, background: "#eee" }}>
          <CardContent>
            {/* Check Icon  */}
            <Typography variant="h5" component="h2" sx={todoStyle} color={isCompleted ? "red" : "green"}>
              <IconButton onClick={handleChecked}>
                {isCompleted ? <TaskAlt /> : <PanoramaFishEye />}
              </IconButton>
              {title}
              <IconButton sx={{ float: "right" }} onClick={delTodo}>
                <Delete sx={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
