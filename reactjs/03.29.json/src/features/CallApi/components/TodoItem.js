import React from "react";
import Button from "../../../components/Button";
function TodoItem(props) {
  return (
    <>
      <li key={props.index} className="well">
        <h3>
          {props.index} {props.title}
        </h3>
        <p>{props.body}</p>
        <div className="buttonContainer">
          <Button
            handleClick={props.handleReadMore}
            nameBtn="Read More"
            bgColor="btn-primary"
          />
          <Button
            handleClick={props.handleDeleteItem}
            nameBtn="Delete"
            bgColor="btn-danger"
          />
          
        </div>
      </li>
    </>
  );
}

export default TodoItem;
