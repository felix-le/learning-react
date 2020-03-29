import React, { useState } from 'react';


/**
 * Luồng tạo variables tương ứng với các items, 
 * tạo array chứa item
 * trong item có title thay đổi --> tạo biến
 * Trong pj này có thằng input --> bắt được giá trị nó nhập
 * --> tạp hàm bắt luồng nhập --> bắt luồng nhập --> bắt value
 * tạo hàm add todo 
 * 
 * 
 */
function App() {
  const [todos, setTodos] = useState([]); // Declare a new state variable, which we'll call "todos", setTodos == this.state ==> setTodos sex set luon gia tri cho thang todos
  const [title, setTitle] = useState(''); // luu y cach dat ten


  const handleChangeTitle = event => { // cach viet arrow function, please search it
    const { value } = event.target; // this is Destructuring es6, please read
    setTitle(value);
  }

  const handleAddTodo = () => {
    // luon luon tao 1 array or object moi, de push vao value cu~ (newObj + newArray). Goi la immutable

    if (title !== '') {
      setTitle('');
      const newObj = {
        id: Date.now(),
        title,
        isCompleted: false
      }
      const newArray = [...todos, newObj]; /// ... goi la spread operator e6
      // todos[] 
      // A --> newArray[A]
      // B -> newArray[A]-- > [A B]
      // C  -->  newArray[A, B ] ---> [A B C]
      
      setTodos(newArray);
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form-group">
        <label>Add Item</label>
        <input type="text" className="form-control" name="" value={title} onChange={event => handleChangeTitle(event)} />
      </div>
      <div className="buttonContainer">
        <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
        <button className="btn btn-danger">Clear Todo</button>
      </div>
      <h3>Todo List</h3>
      <ul id="todoList">
        {todos.length > 0 ? (
          todos.map(item => {
            return (
              <li key={item.id} className="completed well">
                <label>{item.title}</label>
                <button className="btn btn-success">Complete</button>
                <button className="btn btn-danger">Delete</button>
              </li>
            )
          })
        ) : <div>Nothing list todo</div>}
      </ul>
    </div>
  );
}

export default App;
