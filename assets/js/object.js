var vietanh = {
  firstname: 'vietanh',
  lastname: 'le',
  age: '33',
  location: 'hochiminh',
  getinfor: function () {
    return this.firstname + " " + this.lastname + " " + this.location;
  }
};
// console.log(vietanh['lastname']);
// khi chay data rong --> kiem tra obj co rong khong? --> chay tiep.

function checkObj() {
  var booleanObj = Object.values(vietanh);
  if (booleanObj.length > 0) {
    return 'yes';
  } 
    return 'no'
  
}
console.log(checkObj());
function getperson() {
  console.log(vietanh.getinfor());
};
getperson();