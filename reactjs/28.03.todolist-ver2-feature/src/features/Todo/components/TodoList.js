import React from "react";
import Button from "../../../components/Button";

const TodoList = props => {
  // console.log(props.todos);
  return (
    <>
      <ul id="todoList">
        {props.todos.length > 0
          ? props.todos.map((todo, index) => {
              return (
                <li key={todo.id} className="well">
                  <label className={`${todo.isCompleted ? "completed" : ""}`}>{todo.title}</label>
                  <Button
                    handleClick={() => props.completedTodo(index)}
                    bgColor="btn-success"
                    newAttributes={`${todo.isCompleted ? "btn-completed": ""}`}
                    nameBtn={`${todo.isCompleted ? "Completed" : "Complete"}`}
                  />
                  <Button
                    handleClick={() => props.DeleteTodo(todo.id)}
                    bgColor="btn-danger"
                    nameBtn="Delete"
                  />
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};
export default TodoList;
