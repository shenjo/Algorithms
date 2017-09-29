/**
 * Created by SHENJO on 9/13/2017.
 */
function quickSort (array) {
  return partion(array, 0, array.length - 1);
}
/**
 *
 * @param array
 * @param first
 * @param last
 * @returns {*}
 */
function partion (array, first, last) {
  if (last - first < 1) {
    return array;
  }
  let flag = first - 1, temp, baseEle = array[last];
  for (let i = first; i < last; i++) {
    if (array[i] < baseEle) {
      flag++;
      if (flag !== i) {
        temp = array[i];
        array[i] = array[flag];
        array[flag] = temp;
      }
    }
  }
  array[last] = array[flag + 1];
  array[flag + 1] = baseEle;
  partion(array, first, flag);
  partion(array, flag + 2, last);
  return array;
}
exports.quickSort = quickSort;
var arr = [];
for(let i = 0;i<10;i++){
  arr.push(Math.floor(Math.random()*1000))
}

console.log(quickSort([5, 4, 3, 2, 1,42,1,23,324,234,123,123,123,123,23,546,87,65,78]));

console.log(quickSort([15, 4, 37, 22, 1]));
console.log(quickSort(arr));