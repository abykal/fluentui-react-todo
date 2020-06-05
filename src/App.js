import React, { useState } from "react";
import "./App.css";
import { Stack } from "@fluentui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "First todo item" },
    { id: 2, name: "Second todo item" },
  ]);
  const addTodo = (todoName) => {
    if (todoName !== "") {
      const newId = todos.length + 1;
      const newTodos = [...todos, { id: newId, name: todoName }];
      setTodos(newTodos);
    }
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="wrapper">
      <Stack horizontalAlign="center">
        <h1>The Fluent To-Do App</h1>
        <Stack style={{ width: 400 }} gap={25}>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
