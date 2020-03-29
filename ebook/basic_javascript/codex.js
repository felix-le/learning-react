/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, 
 * ngược lại là false.
 */
function isPrimeNumber(x) {
  // viết code ở đây.
  let flag = true;
  if (x <= 1) {
    flag = false;
  } else {
    for (let i = 2; i < x - 1; i++) {
      if (x % i === 0) {
        flag = false;
        break;
      }
    };
  }
  if (flag) {
    return flag;
  } else {
    return flag;
  }
};
isPrimeNumber(7);