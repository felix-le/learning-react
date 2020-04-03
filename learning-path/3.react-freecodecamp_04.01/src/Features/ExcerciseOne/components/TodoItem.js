import React from "react";

function TodoItem(props) {
  const {id, text, completed} = props.item
  return (
    <>
      <div className="form-group">
        <input type="checkbox" id={id} checked={completed ? 'checked' : ''}/>
        <label htmlFor={id} >{text}</label>
      </div>
    </>
  )
};

export default TodoItem;