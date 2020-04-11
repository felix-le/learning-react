import React from "react";
import Button from "../../../components/Button";

const TodoList = props => {
  // console.log('=====TodoList component===', props);
  return (
    <>
      <ul id="todoList">
        {props.todos.length > 0
          ? props.todos.map((todo, index) => {
            return (
              <li key={todo.id} className="well">
                <label className={`${todo.completed ? "completed" : ""}`}>{todo.title}</label>
                <Button
                  handleClick={() => props.completedTodo(todo.id)}
                  bgColor="btn-success"
                  newAttributes={`${todo.completed ? "btn-completed" : ""}`}
                  nameBtn={`${todo.completed ? "Completed" : "Complete"}`}
                />
                <Button
                  handleClick={() => props.deleteTodo(todo.id)}
                  bgColor="btn-danger"
                  nameBtn="Delete"
                />
              </li>
            );
          })
          : null}
          {props.itemApi.length > 0
          ? props.itemApi.map((item, index) => {
            return (
              <li key={item.id} className="well">
                <label className={`${item.completed ? "completed" : ""}`}>{item.title}</label>
                <Button
                  handleClick={() => props.completedTodo(item.id)}
                  bgColor="btn-success"
                  newAttributes={`${item.completed ? "btn-completed" : ""}`}
                  nameBtn={`${item.completed ? "Completed" : "Complete"}`}
                />
                <Button
                  handleClick={() => props.deleteTodo(item.id)}
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
