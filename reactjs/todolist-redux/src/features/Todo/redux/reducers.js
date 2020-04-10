import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_ERROR,
} from "./types";

const initialState = {
  todos: [],
  loading: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload], //array descturing
      };
    }

    // ------------------------------------------------------------------------------------------
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        }),
      };
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    }

    // ------------------------------------------------------------------------------------------
    case FETCH_TODO_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.data,
        loading: false,
      };
    }

    case FETCH_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    // ------------------------------------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;

// const completedTodos = [...todos];
// completedTodos[index].isCompleted = !completedTodos[index].isCompleted;
// setTodos(completedTodos);
