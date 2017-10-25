/**
 * Created by SHENJO on 10/16/2017.
 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let length = s.length, arr = [], colIndex = 0, rowIndex = -1, reverse = false, result = '';
  if (length <= numRows || numRows===1) {
    return s;
  }
  for (let i = 0; i < length; i++) {
    arr[i] = [];
  }
  for (let i = 0; i < length; i++) {
    if (rowIndex === 0) {
      reverse = false;
    }
    if (rowIndex === numRows - 1) {
      reverse = true;
    }
    if (reverse) {
      colIndex++;
      rowIndex--;
    } else {
      rowIndex++;
    }
    arr[rowIndex][colIndex] = s[i];

  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = arr[i].length; j < len; j++) {
      result += arr[i][j] ? arr[i][j] : '';
    }
  }
  return result
};
console.log(convert("AB", 1));