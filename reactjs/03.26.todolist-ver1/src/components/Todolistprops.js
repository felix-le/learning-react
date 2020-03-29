import React, { useState } from "react";
import _TodoFormProps from "./_TodoFormProps";
import _TodoListProps from "./_TodoListProps";

function Todolistprops() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <h1>Hi, it's To do list by props</h1>
      <_TodoFormProps addTodo={addTodo} />
      <_TodoListProps todos="todos" />
    </div>
  );
}

export default Todolistprops;
