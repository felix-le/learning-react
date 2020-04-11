import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./css/TodoStyle.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// import actions
import { addTodo, toggleTodo, removeTodo, fetchTodos } from "./redux/actions";
import { SET_LOADING } from "./redux/types";

const Todo = ({
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
  fetchTodos,
  error,
  loading,
  itemApi,
}) => {
  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const [todos, setTodos] = useState([]);
  const _handleAddItemTodo = (value) => {
    if (value !== "") {
      addTodo(value);
    }
  };

  const _handleCompleteTodo = (id) => {
    // console.log("===_handleCompleteTodo====", id)
    toggleTodo(id);
  };

  const _handleDeleteTodo = (id) => {
    removeTodo(id);
  };

  const _handleClearTodo = (id) => {
    console.log("===_handleClearTodo====");
  };

  return (
    <>
      <h1>This is Todo page</h1>
      <div className="container">
        <TodoForm
          handleAddItemTodo={(value) => _handleAddItemTodo(value)}
          handleClearTodo={_handleClearTodo}
        />
        {loading && <div>Please waiting ...</div>}
        {error && <div>error fetch api...</div>}
        <TodoList
          todos={todos}
          itemApi={itemApi}
          completedTodo={(id) => _handleCompleteTodo(id)}
          deleteTodo={(id) => _handleDeleteTodo(id)}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    todoReducers: { todos, error, loading, itemApi },
  } = state; //object destructuring

  return {
    todos,
    error,
    loading,
    itemApi,
  };
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
