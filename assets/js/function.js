// pure function
/*
- nhan vao 1 input, tra ve 1 output
*/

var array = [2, 3, 5, 1, 4, 0]; // BE tra ve data

function reserveArray() {
  return array.sort((a, b) => b - a);
}


function handleTotal(x, y) {
  return x + y;
}

function multiFnc(z) {
  var plus = handleTotal(3, 2);
  var sort = reserveArray();

  console.log(plus, sort)
}

multiFnc(2)