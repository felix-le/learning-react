import React, { useState } from "react";

function _TodoFormProps({ addTodo }) {
  const [todo, setTodo] = useState({
    id: Date.now(),
    title: "",
    completed: false
  });
 
  function handleTaskInputChange(e) {
    setTodo({ ...todo, title: e.target.value})
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.title.trim()) {
      addTodo({ ...todo, id: todo.id });
      // Reset Title Input
      setTodo({...todo, title: ""});
    }
  }

  return (
    <div className="listodo-wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control"
              name="title"
              type="text"
              onChange={handleTaskInputChange}
              value={todo.title}
            />

          </div>
          <div className="buttonContainer">

            <button className="btn btn-primary" type="submit">submit</button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default _TodoFormProps;
