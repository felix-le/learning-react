import React, { useState } from 'react';

// components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'start'
  }])


  const handleAddItemTodo = (value) => {
    console.log('=====handle add todo====', value)
    if (value !== '') {
      const newObj = {
        id: Math.random(),
        title: value
      }
      const newArr = [...todos, newObj]
      setTodos(newArr);
    }
  };
  const handleClearTodo = () => {
    console.log('---- Clear Todo ----');
  };
  
  
  return (
    <div>
      <div className="listodo-wrapper">
        <h1>Todo list with feature</h1>
        <div className="container">
          <TodoForm handleAddItemTodo={(value) => handleAddItemTodo(value)} handleClearTodo={handleClearTodo} />
          <TodoList todos={todos} name="VA" />
        </div>
      </div>
    </div>
  )
};

export default Todo;

