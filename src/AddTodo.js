import React, { useState } from "react";
import { Stack, TextField, PrimaryButton } from "@fluentui/react";

const AddTodo = (props) => {
  const [todoName, setTodoName] = useState("");
  const handleChange = (ev) => setTodoName(ev.target.value);
  const addTodo = () => {
    props.addTodo(todoName);
    setTodoName("");
  };
  return (
    <Stack>
      <Stack horizontal>
        <Stack.Item grow>
          <TextField
            placeholder="Add new Item"
            value={todoName}
            onChange={handleChange}
          />
        </Stack.Item>
        <PrimaryButton onClick={addTodo}>Add</PrimaryButton>
      </Stack>
    </Stack>
  );
};

export default AddTodo;
