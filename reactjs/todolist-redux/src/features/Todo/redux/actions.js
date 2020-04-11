import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_ERROR,
} from "./types";

// import { apiFetchTodos } from '../api'; // way 1
import * as api from "../api"; // way 2

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(new Date()),
    title,
    completed: false,
    loading: true
  },
});



export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
    loading: false
  },
});

// const fetchTodosStart = () => ({
//    type: FETCH_TODO_START,
// })

// way 1: curry function
export const fetchTodos = () => async (dispatch) => {
  // dispatch(fetchTodosStart())
  dispatch({
    type: FETCH_TODO_START,
  });
  try {
    const res = await api.apiFetchPosts();
    const data = res.data;
    dispatch({
      type: FETCH_TODO_SUCCESS,
      payload: { data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_TODO_ERROR,
    });
  }
};

//way 2 - refer: http://demo.rekit.org/element/src%2Ffeatures%2Fhome%2Fredux%2FfetchProjectData.js/code
