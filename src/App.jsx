import { useState } from "react";
import "../CSS/main.min.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  //note: Check Todo
  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isComplete = !todo.isComplete;
        return todo;
      })
    );
  };
  //note: Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      title: text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
