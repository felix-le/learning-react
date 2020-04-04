<!-- anonymous function -->

- function hasn't name
  function(){}

<!-- object -->

var obj = {
key: value,
....
keyn: function(){

<!-- code to do -->

},
keyn: function(argument){

<!-- example -->

this.key1 = this.key1 + argument.key1
return this;
}
};

var argument= {keyArg = value}

<!-- console.log(obj.weight) -->

obj.key(argument);

<!-- console.log(obj.weight) -->

--> 2 value is different;

<!-- push new value to key in obj -->

myDog.key =;

<!--  if you want obj to return a value of key - you should try return syntax-->

<!--  so sánh 2 string thì cái nào ít ký tự hơn thì ngon hơn -->

<!-- Vòng lặp for -->

for(init; condition; final-expression){
statements;
}

<!-- vòng lặp for of dùng truy xuất từng từng phần tử trong mảng/obj -->
<!-- /**
 * For of dùng để truy xuất thông tin TỪNG element trong array (element này có thể là 1 obj)
 *
 * for in dùng để truy xuất thông tin TỪNG key - value trong obj.
 */ -->

var array = [
{obj: 'obj1', value: 'value1'},
{obj: 'obj2' , value: 'value2'},
{obj: 'obj3', value:'value3'}
];

for (var element of array){
console.log(element.obj, element.value);
};

<!-- Vòng lặp for in dùng để truy xuất các giá trị trong 1 obj -->

var obj = {
key1: 'value1',
key2: 'value2',
key3: 'value3'
};

for (var key in obj){
console.log(key, obj[key]);
};

<!-- METHODS -->

<!-- NỐI 2 array + Không thay đổi array cũ -->

c = a.concat(b)

<!-- PUSH NỐI thêm phần tử xuống cuối + KẾT QUẢ TRẢ VỀ LÀ LENGTH  + Làm thay đổi ARRAY GỐC-->

a.push(c); (trả về kết quả độ dài của length);

<!-- POP - ĐẨY phần tử cuối  + TRẢ VỀ PHẦN TỬ CUỐI + LÀM THAY ĐỔI ARRAY GỐC-->

a.pop(); //phần tử cuối bị đẩy ra;
a; // giá trị bị thay đổi;

<!-- SHIFT + LẤY PHẦN TỬ ĐẦU + TRẢ PHẦN TỬ ĐẦU + THAY ĐỔI ARRAY GỐC -->

c = a.shift();

<!-- UNSHIFT + TRẢ VỀ ĐỘ DÀI CỦA MẢNG + THAY ĐỔI ARRAY GỐC -->

a.unshift(10)

// array map = transform function (from A function to B function) follow (a) rule(s)

/\*\*

- arr.map(function(item){
- //transform
- return newValue;
- });
  \*/
  <!-- Một số câu lệnh quan trọng -->

props được truyền từ thằng con lên thằng cha ( khi đó cần thỏa mãn yêu cầu như sau)

- Thằng con sẽ chứa thuộc tính props ở trong tham số - syntax được chứa như trong ví dụ
  <!-- import React from "react";
    const Button = props => {
    return (
    <button
    onClick={props.handleClick}
    className={`btn ${props.bgColor} ${props.newAttributes}`} >
    {props.nameBtn}
    </button>
    );
    };

export default Button; -->

- Thằng cha khi truyền biến vào như sau

  <!-- <Button
  handleClick={() => props.completedTodo(index)}
  bgColor="btn-success"
  newAttributes={`${todo.isCompleted ? "btn-completed": ""}`}
  nameBtn={`${todo.isCompleted ? "Completed" : "Complete"}`}
  /> -->

- Trong trường hợp thằng con truyền value và thằng bố bắt value thì móc ngược lên.

- Các hàm click thì cần phải làm 1 hàm rỗng để tạo trigger.nếu ko thì sẽ bị bắt ngay khi render ra.

- Những thuộc tính truyền đi thì phai được gắn props.
    <!-- <Button
    bgColor="btn-danger"
    nameBtn="Clear Todo"
    handleClick={props.handleClearTodo}
  /> -->

Từ thằng cha truyền xuống thằng con:
<!--  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "start",
      isCompleted: false
    }
  ]);

  <TodoList
          todos={todos}
          completedTodo={index => completedTodo(index)}
          DeleteTodo={id => DeleteTodo(id)}
        />


thằng con
{props.todos.length > 0
          ? props.todos.map((todo, index) => {
              return (
                <li key={todo.id} className="well">
                  <label className={`${todo.isCompleted ? "completed" : ""}`}>{todo.title}</label>
                  <Button
                    handleClick={() => props.completedTodo(index)}
                    bgColor="btn-success"
                    newAttributes={`${todo.isCompleted ? "btn-completed": ""}`}
                    nameBtn={`${todo.isCompleted ? "Completed" : "Complete"}`}
                  />
                  <Button
                    handleClick={() => props.DeleteTodo(todo.id)}
                    bgColor="btn-danger"
                    nameBtn="Delete"
                  />
                </li>
              );
            })
          : null}

 -->

 class  components
class Library extends React.Component {
    constructor() {
      super();
      this.state = {
        openState: false
      }
    }

    // cac lifecycle bat buoc fai viet o tren render.
    // Need to help change value in openstate
    handleChangeOpen = () => {
      const { openState } = this.state;
      this.setState({ openState: !openState })
    }

    render() {
      const { openState } = this.state;
      // neu cac function ve conditional, bien. Please write here.
      const colorText = openState ? "red" : "blue";
