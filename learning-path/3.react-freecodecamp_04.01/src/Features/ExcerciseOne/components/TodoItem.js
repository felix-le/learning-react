import React from "react";

function TodoItem(props) {
  return (
    <>
      <div className="form-group">
        <input type="checkbox" id={props.id}/>
        <label htmlFor={props.id} > Placeholder text here</label>
      </div>
    </>
  )
};

export default TodoItem;