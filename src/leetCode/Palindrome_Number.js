/**
 * Created by SHENJO on 10/16/2017.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
//solution 1: convert to String
var isPalindrome = function(x) {
  x = '' + x;
  let len = x.length, first = 0, last = x.length - 1;
  while (last > first) {
    if (x[first] !== x[last]) {
      return false;
    }
    first++;
    last--
  }
  return true;
};

//solution 2: convert to String
var isPalindrome2 = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  let num = 0;
  while (x > num) {
    num = num * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === num || x === Math.floor(num / 10)
};


console.log(isPalindrome(0));