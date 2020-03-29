import React, { useState } from "react";
import Button from "../../../components/Button";
const TodoForm = props => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="title"
          id="itemInput"
          onChange={event => setValue(event.target.value)}
          value={value}
        />
      </div>
      <div className="buttonContainer">
        <Button
          bgColor="btn-primary"
          nameBtn="Add Todo"
          handleClick={() => props.handleAddItemTodo(value)}
        />
        <Button
          bgColor="btn-danger"
          nameBtn="Clear Todo"
          handleClick={props.handleClearTodo}
        />
      </div>
    </>
  );
};

export default TodoForm;

// click add to do --> console.log add to do
