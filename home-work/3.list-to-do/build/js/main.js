// listtodo - ver 1

// window.onload = function () {
//   handleCheck();
//   handleItemActive();
//   handleRemoveTask();
//   handleinput();
// }
// var inputs = document.querySelectorAll('.check1');
// var labelAll = document.querySelectorAll('label');
// var closeIcon = document.querySelectorAll('.icon-cancel.icon-right');
// var inputEle = document.getElementById('insert-value');
// var allCheckBox = document.querySelectorAll('.checkbox.list-do-item');
// var numberCheckbox = allCheckBox.length;
// var lastCheckBox = allCheckBox[numberCheckbox - 1];
// // checkall btn
// function handleCheck() {
//   function checkAll1() {
//     for (var i = 0; i < inputs.length; i++) {
//       inputs[i].checked = true;
//     }
//     this.onclick = uncheckAll1;
//     for (var i = 0; i < labelAll.length; i++){
//       labelAll[i].classList.add('active-check');
//     }
//   }

//   function uncheckAll1() {
//     var inputs = document.querySelectorAll('.check1');
//     for (var i = 0; i < inputs.length; i++) {
//       inputs[i].checked = false;
//     }
//     this.onclick = checkAll1; //function reference to original function
//     for (var i = 0; i < labelAll.length; i++){
//       labelAll[i].classList.remove('active-check');
//     }
//   }
//   var el = document.getElementById("checkall1"); //let for ES6 aficionados 
//   el.onclick = checkAll1; //again, function reference, no ()
// }


// // check one task
// function handleItemActive() {
//   if (inputs.length > 0) {
//     inputs.forEach(function (el) {
//       el.addEventListener('click', function () {
//         var parentEle = el.parentElement;
//         if (parentEle.classList.contains('active-check')) {
//           parentEle.classList.remove('active-check');
//         } else {
//           parentEle.classList.add('active-check');
//         }
//         // el.parentElement.toggle('active-check');
//       })
//     })
//   }
// }
// // remove task
// function handleRemoveTask() {
//   if (closeIcon.length > 0) {
//     closeIcon.forEach(function (el) {
//       el.addEventListener('click', function () {
//         el.parentElement.remove();
//       })
//     })
//   }
// };
// // add task

// // detect press enter
// function handleinput() {


//   inputEle.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       var inputValue = inputEle.value;
//       if (inputValue !== 0) {

//         // var doc = parser.parseFromString(spin, 'text/xml');
//         var newEle = '<div class="checkbox list-do-item"><label><input class="check1" type="checkbox">' + inputValue + '</label><div class="icon-cancel icon-right" title="close"></div>';
//         lastCheckBox.insertAdjacentHTML('afterend', newEle);
//         inputEle.value = '';
//       } 
//     }
//   });
// };

// listtodo download
let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);

  const list = document.querySelector('.js-todo-list');
  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `);
}

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('done');
  } else {
    item.classList.remove('done');
  }
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
  
  const list = document.querySelector('.js-todo-list');
  if (todoItems.length === 0) list.innerHTML = '';
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }

});