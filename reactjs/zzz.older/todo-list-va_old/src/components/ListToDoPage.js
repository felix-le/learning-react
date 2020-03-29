import React, { useState } from 'react';
import Title from './Title';
/**
 * Luồng tạo variables tương ứng với các items, 
 * tạo array chứa item
 * trong item có title thay đổi --> tạo biến
 * Trong pj này có thằng input --> tạo giá trị cho nó để lấy value từ input
 * tạo hàm bắt sự kiện khách hàng họ nhập dữ liệu
 * tạo hàm khi khách hàng họ bấm vào nút add thì sẽ addd
 */
function ListToDoPage() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  
  const handleChangeTitle = event => {
    const { value } = event.target;
    setTitle(value) ;
  }
  const handleAddTodo = () => {

    if (title !== '') {
      setTitle('');
      const newObj = {
        id: Date.now(),
        title,
        isCompleted: false
      }
      const newArray = [...todos, newObj]

      setTodos(newArray);
    }
  }

  const handleClearTodo = () => {
    const emptyArr = [];
    setTodos(emptyArr);
  }
  
  const handleDelete = (id) => {

    // const removeArr = todos.filter(function (item) {
    //   return id !== item.id
    // })
    const removeArr = todos.filter(item => item.id !== id)
    setTodos(removeArr);
  }

  const handleCompleted = (index) => {
   
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }
  const _handleListCompleted = () => {
    const listCompleted = todos.filter(item => item.isCompleted === true);
    setTodos(listCompleted);
  }
  const handleListNotCompleted = () => {
    const listNotCompleted = todos.filter(item => item.isCompleted === false);
    setTodos(listNotCompleted);
  }
  return (
    <div className="listodo-wrapper">
      <div className="container"></div>
        <Title textColor="black" textSize="20px" subColor="black"/>
        <div className="form-group">
          <label>Add Item</label>
          <input type="text" className="form-control" value={title} name="" id="itemInput" onChange={event => handleChangeTitle(event)} />
        </div>
        <div className="buttonContainer">
          <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
          <button className="btn btn-primary"onClick={handleListNotCompleted.bind(this)}>Filter Not Complete</button>
          <button className="btn btn-primary" onClick={_handleListCompleted.bind(this)}>Filter Completed</button>
          <button className="btn btn-danger" onClick={handleClearTodo}>Clear Todo</button>
        </div>
        <Title />
        <ul id="todoList">
          {todos.length > 0 ? (
            todos.map((item, index) => {
              return (
                <li className="well" key={item.id}>
                  <label className={item.isCompleted ? 'completed' : ' '}>{item.title}</label>
                  <button className="btn btn-success"onClick={() => handleCompleted(index)}>{item.isCompleted ? 'Completed' : 'Complete'}</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
              )
            })
          ) : <div>Nothing</div> }
        </ul>
      </div>
  );
}
export default ListToDoPage;
