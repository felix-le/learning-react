import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(new Date()),
    title,
    isCompleted: false
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})