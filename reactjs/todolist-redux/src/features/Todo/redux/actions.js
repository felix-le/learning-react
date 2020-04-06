import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from './types';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(new Date()),
    title
  }
})

export const toogleTodo = isCompleted => ({
  type: TOOGLE_TODO,
  payload: {
    isCompleted
  }
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})