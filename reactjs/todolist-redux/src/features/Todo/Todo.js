import React, { useState } from "react";
import { connect } from 'react-redux';
import "./css/TodoStyle.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// import actions
import { addTodo } from './redux/actions';

const Todo = (props) => {
  console.log('===Todo Component===', props);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "start",
      isCompleted: false
    }
  ]);

  const _handleAddItemTodo = value => {
    if (value !== "") {
      props.addTodo(value);
    }
  };

  const _handleCompleteTodo = id => {
    console.log("===_handleCompleteTodo====", id)
  }

  const _handleDeleteTodo = id => {
    console.log("===_handleDeleteTodo====", id)
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
          todos={props.todos}
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

  return {
    todos
  };
}

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
