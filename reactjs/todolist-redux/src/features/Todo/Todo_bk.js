import React, { useState } from "react";
import "./css/TodoStyle.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "start",
      isCompleted: false
    }
  ]);

  const handleAddItemTodo = value => {
    if (value !== "") {
      const newObj = {
        id: Math.random(),
        title: value,
        isCompleted: false
      };
      const newArr = [newObj, ...todos];
      setTodos(newArr);
    }
  };

  const handleClearTodo = () => {
    const emptyArr = [];
    setTodos(emptyArr);
  };

  const completedTodo = index => {
    const completedTodos = [...todos];
    completedTodos[index].isCompleted = !completedTodos[index].isCompleted;
    setTodos(completedTodos);
  };

  const DeleteTodo = id => {
    const removeArr = todos.filter(item => item.id !== id);
    setTodos(removeArr);
  };
  return (
    <>
      <h1>This is Todo page</h1>
      <div className="container">
        <TodoForm
          handleAddItemTodo={value => handleAddItemTodo(value)}
          handleClearTodo={handleClearTodo}
        />
        <TodoList
          todos={todos}
          completedTodo={index => completedTodo(index)}
          DeleteTodo={id => DeleteTodo(id)}
        />
      </div>
    </>
  );
};

export default Todo;
