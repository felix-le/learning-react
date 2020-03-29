// Turn an array of voter objects into a count of how many people voted

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function totalVotes(arr) {
//   // write code here...
//   let sum = arr.reduce((acc, val) => {
//     // console.log(sum);
//     return val.voted === 'true' ? acc : acc + val.voted;
//   }, 0);
//   console.log(sum);
// };
// totalVotes(voters);
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue
// })

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// function shoppingSpree(wishlist) {
//   // Write code here...
//   let sum = wishlist.reduce((acc, val) => {
//     return val.price == Number ? acc : acc + val.price;
//   }, 0);
//   console.log(sum);
// }
// shoppingSpree(wishlist);



// Given an array of all your wishlist items, returns an array of titles

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// function arrayTitle(wishlist) {
//   // Write code here...
//   let sum = [];
//   sum = wishlist.reduce(function (a, b) {
//     return [...a, b.title];
//   }, [])
//   console.log(sum);
//   return sum;
  
// }

// arrayTitle(wishlist)


// arr.reduce(function(item1, item2){
//   //calculation
//   return x;
// }, init);


// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

// function flatten(arr) {
//   // viết code ở đây.
//   return arr.reduce(function (acc, currentValue) {
//     return acc.concat(currentValue)
//   }, []);
//   console.log()
// }


/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  var countEle = arr.reduce(function (allElements, ele) {
    if (ele in allElements) {
      allElements[ele]++;
    }
    else {
      allElements[ele] = 1;
    }
    return allElements;
  }, {});
  // console.log(countEle);
  return countEle;
}
countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };




// cities.filter(e => e.population < 3000000)
//     .sort((a, b) => (b.population - a.population))
//     .map(e => console.log(e.name + ':' + e.population));