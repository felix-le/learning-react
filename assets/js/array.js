var array = [
  {
    id: 1,
    name: 'viet anh',
    value: 1,
  },
  {
    id: 2,
    name: 'truong',
    value: 200,
  },
  {
    id: 3,
    name: 'nam',
    value: 300,
  }

];

const newArray = [];

// for, for...in, for...of, forEach

for (let i = 0; i < array.length; i++) {
 //array[0], array[1], array[2]
  newArray.push(array[i].value)
}

console.log(newArray)