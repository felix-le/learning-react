import React, {useState} from "react";
import { connect } from 'react-redux';
import "./css/TodoStyle.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// import actions
import { addTodo, toggleTodo,  removeTodo} from './redux/actions';

const Todo = ({ todos, addTodo, toggleTodo, removeTodo}) => {
  // const [todos, setTodos] = useState([]);
  const _handleAddItemTodo = value => {
    if (value !== "") {
      addTodo(value);
    }
  };

  const _handleCompleteTodo = id => {
    // console.log("===_handleCompleteTodo====", id)
    toggleTodo(id);
  }

  const _handleDeleteTodo = id => {
    removeTodo(id)
  }

  const _handleClearTodo = id => {
    console.log("===_handleClearTodo====")
  }

  return (
    <>
      <h1>This is Todo page</h1>
      <div className="container">
        <TodoForm
          handleAddItemTodo={value => _handleAddItemTodo(value)}
          handleClearTodo={_handleClearTodo}
        />
        <TodoList
          todos={todos}
          completedTodo={id => _handleCompleteTodo(id)}
          deleteTodo={id => _handleDeleteTodo(id)}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const {
    todoReducers: { todos }
  } = state; //object destructuring
  console.log("OUTPUT: state", state);
  
  const {
    todoReducers: {isCompleted}
  } = state;
  const {
    todoReducers: {removeTodo}
  } = state;

  return {
    todos,
    isCompleted,
    removeTodo
  };
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
