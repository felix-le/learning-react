/**
 * array.sort (function (a,b){}) ==> return a sorted array
 * 
 * if sort function
 *  1. returns a value < 0
 * a will come before b
 *  2. returns a value > 0
 *   a will come after b
 * 3. returns 0
 * a and b still unchanged
 * 
 * ascending order : tăng dần
 * descending order
 */

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
// var students = [
//   { name: 'A', score: 100 },
//   { name: 'B', score: 10 },
//   { name: 'C', score: 101 },
//   { name: 'D', score: 50 },
//   { name: 'E', score: 75 }
// ];

// function getTopStudents(students) {
//   // Write code here...
//   students.sort((a, b) => (b.score - a.score));
//   var x = students.slice(0, 3);
//   var y = x.map(e => e.name)
//   // console.log(y);
//   return y;
  
// };
// getTopStudents(students)

// cities.filter(e => e.population < 3000000)
//     .sort((a, b) => (b.population - a.population))
//     .map(e => console.log(e.name + ':' + e.population));

