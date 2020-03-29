/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */

// function isPrimeNumber(x) {
//   // viết code ở đây.
//   let flag = true;
//   if (x <= 1) {
//     flag = false;
//   } else {
//     for (let i = 2; i < x - 1; i++) {
//       if (x % i === 0) {
//         flag = false;
//         break;
//       }
//       flag = true;
//     };
//   }
//   if (flag) {
//     return flag;
//   } else {
//     return flag;
//   }
// };
// isPrimeNumber(x);

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
// function fromCharCode() {
//   // viết code ở đây.
//   var array = [];
//   for (let i = 97; i < 123; i++){
//     var ele = String.fromCharCode(i);
//     array.push(ele);
//   };

//   var newArray = array.join('');
//   console.log(newArray);
//   return newArray
// };

// fromCharCode();
// /---------/
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

// function sum(array) {
//   // viết code ở đây.
//   var sum = 0;
//   for (let i = 0; i < array.length; i++){
//     var x = array[i];
//     sum += x;
//   }
//   console.log(sum);
// };
// sum([1, 2, 3]);


// tính tổng của của các phần tử của array a với các phần tử của array b.
/**

*/

// function sumTotalArray(a, b) {
//   // viết code ở đây.
//   var sumA = 0;  
//   var sumB = 0;

//   for (let i = 0; i < a.length; i++){
//     let x = a[i];
//     sumA += x;
//   };
//   for (let j = 0; j < b.length; j++){
//     let y = b[j];
//     sumB += y;
//     // return sumB;
//   };
//   var total = sumA + sumB;
//   console.log(total);
// };
// var a = [1, 2, 3];
// var b = [10, 20];
// sumTotalArray(a, b);



// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
/**
 * Tức là sẽ lấy LẦN LƯỢT PHẦN TỬ a nhân với LẦN LƯỢT PHẦN TỬ b
 * Lấy tổng của tất cả các phần tử a' để cộng lại.
 * B1: gọi lần lượt từng phần tử a
 * B2: gọi lần lượt từng phần tử b
 * B3:  Tạo 1 tập mới (multi) gồm [lần lượt từng phần tử a nhân với lần lượt phần tử b]
 * B4: tính tổng của các phần tử trong tập multi
 */
// function sumMultiplyArray(a, b) {
//   // viết code ở đây.
//   var x;
//   var sum = 0;
//   for (let i = 0; i < a.length; i++){
//     for (let j = 0; j < b.length; j++){
//       // var array = [];
//       sum += a[i] * b[j];
//     }
//   }
//   return sum;

// };
// sumMultiplyArray([1, 2, 3], [4, 5]);

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
// function calculate(start, end) {
//   // viết code ở đây.

//   var newArray = []
//   for (var i = start; i < end; i++){
//     newArray.push(i);
//   }
//   // console.log(newArray);
//   var x = 0;
//   var z = 1;
//   for (j = 0; j < newArray.length; j++){
//     x = newArray[j];
//     z *= x;
//   }
//   return z;
// }

// calculate(2, 5);


/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
// function has(array, value) {
//   // viết code ở đây
//   let flag = true;
//   for (let i = 0; i < array.length; i++){
//     if (array[i] === value) {
//       return true
//     }
//   }
//   console.log(flag);
//   return false
// }

// has([2, 3, 4], 5);

/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

/**
 * For of dùng để truy xuất thông tin TỪNG element trong array (element này có thể là 1 obj)
 * 
 * for in dùng để truy xuất thông tin TỪNG key - value trong obj.
 */



/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//   // Write code here...
//   var x = 1;
//   for (var i of arr) {
//     x *= i;
//   }
//   console.log(x);
// }
// multiply([1,2,3,4])

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };

// const newArray = [];
// function getObjectKey(obj, keys) {
//   for (const key in obj) {
//     newArray.push(key)
//     if (typeof (obj[key]) === 'object') {
//       getObjectKey(obj[key]);
//     }
//   }
//   return newArray;
// }
// getObjectKey(apartment);

// console.log(newArray)



/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

// function has(object, key) {
//   for (const keyObj in obj) {
//     if (keyObj === key) {
//       return true;
//     } else if (typeof (obj[keyObj] === 'object')) {
//       if (obj[keyObj].next === key) {
//         return true
//       } else {
//         return false
//       }
//     } else {
//       return false
//     }

//   }
// }



/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
// function sum(numbers) {
//   var x = 0;
//   // Write code here...
//   if (numbers === '') {
//     return 0;
//   } else {
//     for (let ele of numbers) {
//       x += ele;
      
//     }
//     // console.log(x);
//     return x;
//   }
// }
// sum([1, 2, 3]);

// a = [1, 2, 3];
// c = a.unshift(-1);
// console.log(c);
// console.log(a);


/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
// function removeEnd(arr, n) {
//   // your code here!
//   for (let i = 0; i <= n; i++){
//     arr.pop(i)
//   }
//   // return arr;
//   console.log(arr);
// }
// var arr = [1, 2, 3, 4, 5, 6, 9];
// removeEnd(arr, 3);

/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
/**
 * 
 * Accessor methods
 * The JavaScript array is a data type that consists of a list of elements. 
 * There are many useful built-in methods to work with arrays in JavaScript. 
 * Methods that modify the original array are known as mutator methods, 
 * and methods that return a new value or representation are known as accessor methods. 
 * ==> NO CHANGE the values of ORIGINAL ARRAYS which would be combined with others array.
 */

// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log("nguyen ban a " + a);
// console.log("nguyen ban c " + c);
// console.log('+++++++++++++++++++++++');
// console.log('Gia tri tra ve khi a concat c ' + a.concat(c));
// console.log('"concat - "NEW value of "a" ARRAY - NO CHANGE' + a);
// console.log('"concat - "NEW value of "c" ARRAY - NO CHANE' + c);




// // The slice() method copies a portion of an array to a new array.
// console.log('++++++++++++slice()+++++++++++');
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log("nguyen ban a " + a);
// console.log("nguyen ban c " + c);
// console.log('Gia tri tra ve khi a a.slice() ' + a.slice());
// var d = a.slice(1,3);
// console.log('Gia tri tra ve khi a slice() ' + d);
// console.log('"slice() - "NEW value of "a" ARRAY ' + a);
// console.log(a);
// /**
//  * CHANGE 
//  * */
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log('++++++++++++push()+++++++++++');
// console.log('Gia tri tra ve khi a push c ' + a.push(c));
// console.log('"push() - "NEW value of "a" ARRAY ' + a);
// console.log('"push() - "NEW value of "c" ARRAY ' + c);
// console.log('+++++++++++pop()++++++++++++');
// // delete the lasties the element(s) of the array
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log('Gia tri tra ve khi a pop() ' + a.pop());
// var d = a.pop();
// console.log('Gia tri tra ve khi a pop() ' + d);
// console.log('"pop() - "NEW value of "a" ARRAY ' + a);
// console.log('++++++++++++shift+++++++++++');
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// // delete the firstes the element(s) of the array
// console.log('Gia tri tra ve khi a shift() ' + a.shift());
// var d = a.shift();
// console.log('Gia tri tra ve khi a shift() ' + d);
// console.log('"shift() - "NEW value of "a" ARRAY ' + a);
// console.log(a);

// // add to the front a new element(s) of the array
// console.log('++++++++++++unshift+++++++++++');
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log('Gia tri tra ve khi a unshift() ' + a.unshift(55555555));
// var d = a.unshift(555555);
// console.log('Gia tri tra ve khi a unshift() ' + d);
// console.log('"shift() - "NEW value of "a" ARRAY ' + a);
// console.log(a);

// console.log('++++++++++++splice()+++++++++++');
// // method splice(), which can add or delete items from the original array.

// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];
// console.log('Gia tri tra ve khi a splice() ' + a.splice(1,3));
// var d = a.splice(1,3);
// console.log('Gia tri tra ve khi a splice() ' + d);
// console.log('"splice() - "NEW value of "a" ARRAY ' + a);
// console.log(a);
// console.log('++++++++++++splice()+++++++++++');
// var a = [1,2,3,4,5,6,7,8,9],
//   c = [22, 3442, 3212, 5];

// console.log('Gia tri tra ve khi a splice() ' + a.splice(1,3, 2222222));
// var d = a;
// console.log('Gia tri tra ve khi a splice() ' + d);
// console.log('"splice() - "NEW value of "a" ARRAY ' + a);
// console.log(a);


/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/
var e = [];

function first(arr, n) { 
 // your code here...
  for (let i = 0; i < n; i++){
    var d = arr.shift();
    e.push(d);
  }
  // return e;
  console.log(e);
}

console.log(first([1, -5, 6, 2, 3], 4));
// expect [1, 2]