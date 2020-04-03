import React from "react";
import TodoItem from "./TodoItem";
import TodosData from "./TodosData";





const TodoList = () => {

  const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <>
      <h1>Todo List </h1>
      <form className="form" action="" noValidate>
        {/* vi sao ko dung dc cach nay? */}
        {/* {`${TodosData.length}` ? (`${todoItems}`) : (<p>Nothing To Show</p>)} */}
        {todoItems}
      </form>
    </>
  );
};
export default TodoList;
