import React, { useState } from "react";
import Form from "../components/Form";
import { Container, List } from "@mui/material";
import Todoitem from "../components/Todoitem";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    var todosArray = [...todos];

    todosArray.splice(id, 1, { text: editedText, id: id });
    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <div className="bg"></div>
      <div className="form">
        <Form addTodo={addTodo} />
      </div>
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <Todoitem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
