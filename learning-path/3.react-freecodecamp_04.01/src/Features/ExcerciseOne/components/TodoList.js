import React from "react";
import TodoItem from "./TodoItem";
const TodoList = () => {

  // let dataTodo = [];

  return (
    <>
      <h1>Todo List </h1>
      <form className="form" action="" noValidate>
        <TodoItem id={1}/>
        <TodoItem id={2}/>
        <TodoItem id={3}/>
        <TodoItem id={4}/>
        <TodoItem id={5}/>
      </form>
    </>
    
  )
}
export default TodoList;