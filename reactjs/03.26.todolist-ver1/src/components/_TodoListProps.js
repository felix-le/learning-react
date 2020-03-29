import React, { useState } from 'react';
import _TodoFormProps from './_TodoFormProps';
import Todolistprops from './Todolistprops';
function _TodoListProps({todos}) {
  return (
    <ul id="todoList">
      {todos.map(todo => (
        <_TodoFormProps key={todo.id} todo={todo} />
      ))
      }
    </ul>
  )
}

export default _TodoListProps;
