import React from "react";

const TodoList = (props) => {
  console.log('====', props)
  
  return (
    <ul id="todoList">
      {props.todos.length > 0 ? props.todos.map((todo, index) => {
        return(
          <li key={index} className="well">
            <label>
              {todo.title}
            </label>
            <button className="btn btn-success">
              Complete
            </button>
            <button
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ) 
      }) : null}
    </ul>
  );
};

export default TodoList;
