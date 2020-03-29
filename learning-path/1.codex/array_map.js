// array map = transform function (from A function to B function) follow (a) rule(s)

/**
 * arr.map(function(item){
 * //transform
 * return newValue;
 * });
 */



/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

// function tripple(num) {
//   // Write code here...
//   return num * 3;
//   // console.log(num * 3)
// }

// function multiply(numbers) {
//   // Write code here...
//   var x = numbers.map(function(num){
//     return tripple(num);
//   })
//   console.log(x);
//   return x;
// };

// tripple(3);
// multiply([10,5,8]);


// Use array map make an array of strings of the names

// var users = [
//   {
//     name: "Angelina Jolie",
//     age: 80

//   },
//   {
//     name: "Eric Jones",
//     age: 2

//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16

//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]

// function search(nameKey, myArray){
//   for (var i=0; i < myArray.length; i++) {
//       if (myArray[i].name === nameKey) {
//           return myArray[i];
//       }
//   }

// }

// var array = [
//   { name:"string 1", value:"this", other: "that" },
//   { name:"string 2", value:"this", other: "that" }
// ];

// var resultObject = search("string 1", array);
// console.log(resultObject);
// let strangerThings = [{
//   name: 'Dustin',
//   age: 13
// }, {
//   name: 'Mike',
//   age: 12
// },
// {
//   name: 'Eleven',
//   age: 11
// }];

// let characters = strangerThings.map(function (character, index, array) {
//   return character.name; 
// });
// console.log(characters);
// Use array map make an array of the names in 
{/* <h1></h1> , and the ages in <h2></h2> */}

const users = [{
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function readyToPutInTheDOM(arr) {
  // Write code here...
  var characters = arr.map(function (character, index, array) {
    // return character.name;
    // console.log('\"<h1>' + character.name + '</h1>\"')
    
  });
  var values = arr.map(function (value, index, array) {
    // return character.name;
    // console.log('\"<h2>' + value.age + '</h2>\"')
  });
  console.log('\"<h1>' + character.name + '</h1>\"'+ ',' + '\"<h2>'+value.age+ '</h2>\"')

}

readyToPutInTheDOM(users)