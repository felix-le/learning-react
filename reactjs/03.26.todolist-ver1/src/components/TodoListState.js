import React, { useState } from "react";
/**
 * Luồng tạo variables tương ứng với các items, 
 * tạo array chứa item
 * trong item có title thay đổi --> tạo biến
 * Trong pj này có thằng input --> tạo giá trị cho nó để lấy value từ input
 * tạo hàm bắt sự kiện khách hàng họ nhập dữ liệu
 * tạo hàm khi khách hàng họ bấm vào nút add thì sẽ addd
 * 
 * Cái luồng làm list to do:

1. tạo hàm bắt sự thay đổi value trong input  (validate cái giá trị)
2. tạo hàm bắt giá trị click button add item (validate cái giá trị)
3. Tạo hàm nhét giá trị đó vào list item (validate cái giá trị)

 * bắt giá trị của user nhập vào trong input
 * tạo hàm để bắt sự kiện đó = onChange
 * Tạo biến tương ứng để nhận giá trị đó (bao gồm current value và setValue)

 * Tạo hàm để add cái item todo đó vào list
 * ==> bắt hành động click vào nút add item
 *  Tạo obj chứa các giá trị mà người dùng nhập vào - lưu ý cần phải có id + validate giá trị ng dùng nhập
 * đồng thời có tình trạng của cái đó vì nó liên quan tới giá trị sau khi này.
 * Sau mỗi lần nhập thì để giá trị của  cái biến đó bằng rỗng 
 *  ==> Phải tạo 1 list chứa các item to do = list rỗng chứa cái đó
 * ==> tạo list rỗng ==> set giá trị mới khi nhập item mới cho list đó.
 
 * Tạo hàm add cái  item to do list đó vô html
 *  Kiểm tra hàm đó có rỗng không? (lệnh length) ==> nếu dùng if thì phải thêm trường else có thể viết tắt = ":"
 * sử dụng hàm lọc duyệt từng item bằng "map" lưu ý là nên tạo ít nhất 2 giá trị 
 * với giá trị 1 là item để bắt từng item trong hàm
 * với 1 giá trị là index để bắt chính xác item tương ứng.
 * 
 * Câu lệnh để kiểm tra có class đó không thì className={item.isCompleted ? 'completed' : ' '} hoặc câu lệnh khác '$... ' sẽ thêm sau.

 * ==> xử lý trường hợp KH xóa - completed item 
 *
 * ****xử lý trường hợp completed
 * click vào btn --> onclick ==> thêm giá trị completed hoặc bỏ
 * Viết hàm Onclick gắn vào btn + sử dingj index để bắt đúng item + toggle class
 * Trong hàm completed thì phải làm như sau:
 * 
 * Tạo 1 cái aray mới, phân rã cái array cũ thành 1 array mới
 * lọc item dựa vào cái index để bắt item 
 *  rồi làm toggle cho nó với câu lệnh
 * newTodos[index].isCompleted = !newTodos[index].isCompleted;
 * 
 * ---------- Xóa item cũng tương tự như trên
 *  bắt click > tìm index > xóa = hàm filter
 * 
 * bắt sk là user login 
 * lưu lại email user login
 * lưu lại todolist
 * 
 */



   // help phải bấm 2 lần thì cái toddo list nó mới nhận giá trị

  // Lỗi không nhận giá trị để show lên li trong khi mà thằng todolist có giá trị bt.
function TodoListState() {
  const [formValueToDo, setFormValueToDo] = useState({
    id: Date.now(),
    title: "",
    isCompleted: false
  });
  const [todoList, setTodoList] = useState([]);

  const handleChangeTitleToDo = event => {
    const { name, value } = event.target;
    setFormValueToDo({
      ...formValueToDo,
      [name]: value
    });
  };
  // help phải bấm 2 lần thì cái toddo list nó mới nhận giá trị
  const handleAddItemTodo = (props) => {
    if (formValueToDo.title !== '') {
      setFormValueToDo({ title: '' });
      const newObjItem = {
        id: Date.now(),
        title: formValueToDo.title,
        isCompleted: false
      };
      const newArr = [newObjItem, ...todoList];
      setTodoList(newArr);
      console.log(todoList);
    }
    return todoList;
  };
  const handleCompletedItem = (index) => {
    const completedItemList = [...todoList];
    completedItemList[index].isCompleted = !completedItemList[index].isCompleted;
    setTodoList(completedItemList);
  }

  const handleDelete = id =>{
    const removeArr = todoList.filter(item => item.id !== id)
    setTodoList(removeArr)
  }
  // help phải bấm 2 lần thì cái toddo list nó mới nhận giá trị

  // Lỗi không nhận giá trị để show lên li trong khi mà thằng todolist có giá trị bt.
  return (
    <div className="listodo-wrapper">
      <div className="container">
        <h1>Todo List</h1>
        <div className="form-group">
          <label>Add Item</label>
          <input
            type="text"
            className="form-control"
            value={formValueToDo.title}
            name="title"
            id="itemInput"
            onChange={event => handleChangeTitleToDo(event)}
          />
        </div>
        <div className="buttonContainer">
          <button className="btn btn-primary" onClick={handleAddItemTodo}>
            Add Todo
          </button>
          <button className="btn btn-danger">Clear Todo</button>
        </div>
        <h3>Todo List</h3>
        <ul id="todoList">
          
          {todoList.length > 0 ? (
            todoList.map((item, index) => {
              return (
                <li className="well" key={item.id}>
                  <label
                    style={{
                    textDecoration: item.isCompleted ? "line-through" : null
                  }}
                  >{item.title}</label>
                <button
                className={`btn btn-success ${
                  item.isCompleted ? "btn-completed" : ""
                }`}
                onClick={() => handleCompletedItem(index)}
              >
                {item.isCompleted ? "Completed" : "Complete"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
              </li>
              )
            })
          ): (<div>No thing to show</div>)}
        </ul>
        
      </div>
    </div>
  );
}

export default TodoListState;
