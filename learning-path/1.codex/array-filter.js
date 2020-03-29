// // Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//   // your code here
//   var x = arr.filter(e => e > 5);
//   // console.log(x);
//   return x;
// }
// fiveAndGreaterOnly([1, 7, 5])

// let cities = [{
//     name: 'Los Angeles',
//     population: 3792621
//   },
//   {
//     name: 'New York',
//     population: 8175133
//   },
//   {
//     name: 'Chicago',
//     population: 2695598
//   },
//   {
//     name: 'Houston',
//     population: 2099451
//   },
//   {
//     name: 'Philadelphia',
//     population: 1526006
//   }
// ];
// var bigCities = cities.filter(function (e) {
//   return e.population > 3000000;
// });
// console.log(bigCities);

// Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//   // your code here!
//   var x = arr.filter(e => e % 2 === 0);
//   console.log(x);
//   // return x;
// }
// evensOnly([3, 6, 8, 2])
/**
 * Give a list of students, filter out non-female 
 */

// var members = [{
//     name: 'Lan',
//     gender: 'female'
//   },
//   {
//     name: 'Linh',
//     gender: 'female'
//   },
//   {
//     name: 'Trung',
//     gender: 'male'
//   },
//   {
//     name: 'Peter',
//     gender: 'gay'
//   }
// ];

// cities.filter(e => e.population < 3000000)
//     .sort((a, b) => (b.population - a.population))
//     .map(e => console.log(e.name + ':' + e.population));

// function filterOutFemales(array){
//   // ...
//   // array.filter(e => e.gender !== 'female')
//   // var x = map(e => console.log(e.gender))
//   console.log(array.filter(e => e.gender !== 'female'))
//   // return array.filter(e => e.gender !== 'female')
// }

// filterOutFemales(members);

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
// function findFirstEvenNumber(array) {
//   // your code here
//   // console.log(array.find(e => e % 2 === 0));
//   // console.log();
//   return array.find(e => e % 2 === 0)
// }

// findFirstEvenNumber([11, 13, 25, 29, 40]);


/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

// function findDivisibleNum(array, x) {
//   // viết code ở đây.
//   return array.find(e => e % x === 0)
// }


/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

// var listProducts = [
//   {id: 1, categoryId: 1, name: 'Tivi'},
//   {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//   {id: 3, categoryId: 3, name: 'Ghế sofa'},
//   {id: 4, categoryId: 1, name: 'Máy giặt'},
//   {id: 5, categoryId: 2, name: 'Chén bát'},
//   {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//   {id: 7, categoryId: 3, name: 'Cửa kính'},
//   {id: 8, categoryId: 1, name: 'Điều hoà'},
//   {id: 9, categoryId: 3, name: 'Bàn tròn'},
//   {id: 10, categoryId: 2, name: 'Lò vi sóng'},
//  ]
 
// function filterProductsByCategoryId(products, categoryId) {
//   // your code here! 
//   var categories = products.filter(e => e.categoryId === categoryId)
//   // console.log(categories);
//   return categories;
// }
// filterProductsByCategoryId(listProducts, 3);

// cities.filter(e => e.population < 3000000)
// filterProductsByCategoryId(products, categoryId);
// ===truy xuất thông tin từ categoryID về các sản phẩm===
// tạo 1 hàm đưa ra các cateID
// tạo 1 hàm từ các cateID --> thông tin obj.

// trong function trên thì products sẽ là list product
// cateID sẽ là biến để truy xuất dữ liệu.

// var bigCities = cities.filter(function (e) {
//   return e.population > 3000000;
// });
// console.log(bigCities);



/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/
// var uniqueArray = function(arrArg) {
//   return arrArg.filter(function(elem, pos,arr) {
//     return arr.indexOf(elem) == pos;
//   });
// };

// function removeDuplicate(array) {
//   // write code here...
//   // console.log(array);
//   return array.filter(function(elem, pos,arr) {
//     return arr.indexOf(elem) == pos;
//   });
// }

// removeDuplicate([1, 1, 2, 3, 3]);