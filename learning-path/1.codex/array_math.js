// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

// function powerup(arr) {
//   // your code here!
//   var x = arr.map(function (ele) {
//     if (ele % 2===0) {
//      return ele*ele
//     } else {
//       return ele
//    }
//   })
//   // console.log(x);
//   return x
// }

// powerup([2,3,4])


/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
 */

// function average(arr) {
//   // your code here!
//   var averageNumber = arr.reduce((acc, val) => {
//     return acc + val
//   }, 0)
//   var x = averageNumber/arr.length
//   // console.log(x);
//   return Math.round(x)

// };

// average([8, 8, 6.75])

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

// function positiveNumber(arr) {
//   // your code here
//   x = arr.map(function(ele){
//     if (ele < 0) {
//       return Math.imul(ele, -1);
//     } else{
//       return ele;
//     }
//   },[])
//   // console.log(x);
//   return x
// }
// positiveNumber([1,2,-4,2,-4,-5])

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
 */

// function rightTriangle(a, b, c) {
//   // your code here
//   var array = [a, b, c];
// }

// rightTriangle(2, 3, 18);


// console.log(Math.pow(3, 2))
// function rightTriangle(a, b, c) {
//   var x = Math.pow(a, 2);
//   var y = Math.pow(b, 2);
//   var z = Math.pow(c, 2);
//   if (x !== 0 || y !== 0 || z !== 0) {

//     if (x === y + z || y === x + z || z === x + y) {
//       return true
//       // console.log(true);
      
//     } else {
//       return false
//       // console.log(false);
//     }
//   } else {
//     return false
//     // console.log(false);
//   }

// }

// rightTriangle(0, 0, 0);


/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

// function circumferenceOfCircle(r) {
//   // your code here!
//   return 2 * 3.14 * r;
// }
// function acreageOfCircle(r) {
//   //your code here!
//   return  3.14 * r*r;
// }

/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

// function trigonim(number) {
//   // your code here
//   var x = [];
//   x.push(Math.asinh(number).toFixed(3));
//   x.push(Math.sinh(number).toFixed(3));
//   x.push(Math.cosh(number).toFixed(3));
//   return x;
// }

// // trigonim(45) = [ '0.851', '0.525', '1.620' ]
// trigonim(45);
// console.log(Math.cosh(0));
