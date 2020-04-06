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
        ></input>
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
      </div>
    </>
  );
};
/* <button onClick={props.handleClick} className={`btn ${props.bgColor}`}>{props.nameBtn}</button> */
export default TodoForm;
