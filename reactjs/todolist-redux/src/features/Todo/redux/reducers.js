import { ADD_TODO, TOOGLE_TODO, REMOVE_TODO } from './types';

const initialState = {
  todos: [],
  loading: false
}

const reducers = (state = initialState, action) => {
  console.log('=== reducers todos ===', action);
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload] //array descturing
      }
    }
    default:
      return state;
  }
}

export default reducers;