import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('')

  const handleChangeTitle = event => {
    const { value } = event.target;
    setTitle(value);
  }

  const handleAddTodo = () => {
    if (title !== '') {
      setTitle('');
      const newObj = {
        id: Date.now(),
        title,
        isCompleted: false
      }

      const newArray = [...todos, newObj]
      setTodos(newArray);
    }
  }
  const handleClearTodo = () => {
    const emptyArry = [];
    setTodos(emptyArry);
  }
  
  const handleDelete = (id) => {
    const removeArr = todos.filter(item => item.id !== id);
    setTodos(removeArr);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form-group">
        <label>Add Item</label>
        <input type="text" className="form-control" value={title} name="" id="itemInput" onChange={event => handleChangeTitle(event)} />
      </div>
      <div className="buttonContainer">
        <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
        <button className="btn btn-primary">Filter Not Complete</button>
        <button className="btn btn-primary">Filter Completed</button>
        <button className="btn btn-danger" onClick={handleClearTodo}>Clear Todo</button>
      </div>
      <h3>Todo List</h3>
      <ul id="todoList">
        {todos.length > 0 ? (
          todos.map(item => {
            return (
              
              <li className="completed well" key={item.id}>
                <label>{item.title}</label>
                <button className="btn btn-success">Complete</button>
                <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
              </li>
            )
          })
        ) : <div>Nothing</div>}
      </ul>
    </div>
  );
}

export default App;
