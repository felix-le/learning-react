import React from "react";

function _TodoProps({ todo }) {
  return (
    <div style={{display:"flex"}}>
      <input type="checkbox" name="" id="" />
      <li
      style={{color: "white", textDecoration: todo.completed ? "line-through":null}} 
      >
        {todo.title}</li>
      <button>X</button>
    </div>
  );
}

export default _TodoProps;
