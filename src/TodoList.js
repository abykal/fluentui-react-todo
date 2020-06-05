import React from "react";
import { Stack, Label, FontSizes } from "@fluentui/react";
//import { FontSizes } from "@uifabric/fluent-theme/lib/fluent/FluentType";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <Stack gap={10}>
      {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} />
        ))
      ) : (
        <Label style={{ fontSize: FontSizes.size28 }}>
          Hurray! All Done!!!
        </Label>
      )}
    </Stack>
  );
};

export default TodoList;
