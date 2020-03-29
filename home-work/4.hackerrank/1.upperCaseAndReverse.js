
// Upper and Reverse for All firstname
// Output: ['OBOB', 'ECNERWAL', 'NONA']

const users = [{
  firstName: 'Bobo',
}, {
  firstName: 'Lawrence',
}, {
  firstName: 'Anon',
}];

//output

const ouput = ['OBOB', 'ECNERWAL', 'NONA']

function uppCase(arr) {
  const x = arr.map(e => e.firstName.toUpperCase())
  const result = [];
  for (let i = 0; i < x.length; i++) {
    let splitString = x[i].split("");
    let rv = splitString.reverse();
    let joinArray = rv.join("");
    result.push(joinArray);
    // console.log(joinArray);
  }
  // console.log(result);
  return result;
}
// uppCase(users);
const finalResult = uppCase(users);
console.log(finalResult);


// case write functional
const getFirstName = user => user.firstName;
const upperCaseString = string => string.toUpperCase();
const reverseString = string => string.split('').reverse().join('');

const upperCaseAndReverse = users => {
  const getName = getFirstName(users);
  const upperCaseName = upperCaseString(getName);
  const reverseName =  reverseString(upperCaseName);
  return reverseName;
}
const way1 = users => users.map(upperCaseAndReverse)


// const result = uppCase(users);

// console.log(result);

// uppCase(users);

// function multiply(numbers) {
//   // Write code here...
//   var x = numbers.map(function(num){
//     return tripple(num);
//   })
//   console.log(x);
//   return x;
// };
