import React, { useState, useEffect } from "react";
// import Title from './Title';
/**
 * Luồng tạo variables tương ứng với các items, 
 * tạo array chứa item
 * trong item có title thay đổi --> tạo biến
 * Trong pj này có thằng input --> tạo giá trị cho nó để lấy value từ input
 * tạo hàm bắt sự kiện khách hàng họ nhập dữ liệu
 * tạo hàm khi khách hàng họ bấm vào nút add thì sẽ addd
 * 
 * 
 * 
 * 
 * Cái luồng làm list to do:

1. tạo hàm bắt sự thay đổi value trong input  (validate cái giá trị)
2. tạo hàm bắt giá trị click button add item (validate cái giá trị)
3. Tạo hàm nhét giá trị đó vào list item (validate cái giá trị)
4. 
 */

/**
 * bắt giá trị của user nhập vào trong input
 * tạo hàm để bắt sự kiện đó = onChange
 * Tạo biến tương ứng để nhận giá trị đó (bao gồm current value và setValue)
 *
 * Tạo hàm để add cái item todo đó vào list
 * ==> bắt hành động click vào nút add item
 *  Tạo obj chứa các giá trị mà người dùng nhập vào - lưu ý cần phải có id + validate giá trị ng dùng nhập
 * đồng thời có tình trạng của cái đó vì nó liên quan tới giá trị sau khi này.
 * Sau mỗi lần nhập thì để giá trị của  cái biến đó bằng rỗng
 *  ==> Phải tạo 1 list chứa các item to do = list rỗng chứa cái đó
 * ==> tạo list rỗng ==> set giá trị mới khi nhập item mới cho list đó.
 *
 * Tạo hàm add cái  item to do list đó vô html
 *  Kiểm tra hàm đó có rỗng không? (lệnh length) ==> nếu dùng if thì phải thêm trường else có thể viết tắt = ":"
 * sử dụng hàm lọc duyệt từng item bằng "map" lưu ý là nên tạo ít nhất 2 giá trị
 * với giá trị 1 là item để bắt từng item trong hàm
 * với 1 giá trị là index để bắt chính xác item tương ứng.
 *
 * Câu lệnh để kiểm tra có class đó không thì className={item.isCompleted ? 'completed' : ' '} hoặc câu lệnh khác '$... ' sẽ thêm sau.
 *
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
 *
 * bắt sk là user login
 * lưu lại email user login
 * lưu lại todolist
 *
 *
 */
function ListToDoPage() {
  const [titleItemToDo, setTitleItemToDo] = useState("");

  const [listTodos, setListTodos] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("loginEmail");
    const todoListByEmail =
      JSON.parse(localStorage.getItem("todoListByEmail")) || {};
    setListTodos(todoListByEmail[email] || []);
  }, []);

  const handleChangeTitleItem = event => {
    const { value } = event.target;
    setTitleItemToDo(value);
  };

  const handleAddItemToDo = () => {
    if (titleItemToDo !== "") {
      setTitleItemToDo("");
      const newObjItem = {
        id: Date.now(),
        titleItemToDo,
        isCompleted: false
      };
      const newAllItemArray = [...listTodos, newObjItem];

      setListTodos(newAllItemArray);

      const email = localStorage.getItem("loginEmail");
      const todoListByEmail =
        JSON.parse(localStorage.getItem("todoListByEmail")) || {};
      todoListByEmail[email] = newAllItemArray;
      localStorage.setItem("todoListByEmail", JSON.stringify(todoListByEmail));
    }
  };

  const handleCompletedItem = index => {
    const newListTodos = [...listTodos];
    newListTodos[index].isCompleted = !newListTodos[index].isCompleted;
    setListTodos(newListTodos);
  };

  const handleDelete = id => {
    const removeArr = listTodos.filter(item => item.id !== id);
    setListTodos(removeArr);
  };
  const _handleListCompleted = () => {
    const listCompleted = listTodos.filter(item => item.isCompleted === true);
    setListTodos(listCompleted);
  };
  const handleListNotCompleted = () => {
    const listNotCompleted = listTodos.filter(
      item => item.isCompleted === false
    );
    setListTodos(listNotCompleted);
  };
  const handleClearTodo = () => {
    const emptyArr = [];
    setListTodos(emptyArr);
  };
  const handleShowAll = () => {
    const showAll = [...listTodos];
    setListTodos(showAll);
  };

  return (
    <div className="listodo-wrapper">
      <div className="container">
        <h1>Todo List</h1>
        <div className="form-group">
          <label>Add Item</label>
          <input
            type="text"
            className="form-control"
            name=""
            id="itemInput"
            value={titleItemToDo}
            onChange={event => handleChangeTitleItem(event)}
          />
        </div>
        <div className="buttonContainer">
          <button className="btn btn-primary" onClick={handleAddItemToDo}>
            Add To do
          </button>
          <button
            className="btn btn-primary"
            onClick={handleListNotCompleted.bind(this)}
          >
            Filter Not Complete
          </button>
          <button
            className="btn btn-primary"
            onClick={_handleListCompleted.bind(this)}
          >
            Filter Completed
          </button>
          <button className="btn btn-primary" onClick={handleShowAll}>
            All To Do
          </button>
          <button className="btn btn-danger" onClick={handleClearTodo}>
            Clear To Do
          </button>
        </div>
        <ul id="todoList">
          {listTodos.length > 0 ? (
            // className={`box ${isBoxVisible ? "" : "hidden"`}}>
            listTodos.map((item, index) => {
              return (
                <li className="well" key={item.id}>
                  <label>
                    {item.titleItemToDo}
                  </label>
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
              );
            })
          ) : (
            <div>Nothing</div>
          )}
        </ul>
      </div>
    </div>
  );
}
export default ListToDoPage;
