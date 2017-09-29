/**
 * Created by SHENJO on 9/11/2017.
 */

/**
 *最大子数组问题-分治算法
 */

function maxiumSubarray (array) {
  let left = 0, last = array.length;
  return maxCrossingSum(array, left, last);
}

function maxCrossingSum (array, left, last) {
  let maxLeft, maxRight, maxCrossLeft = 0, maxCrossRight = 0;

  if (last - left < 1) {
    // only one element
    return array[left] > 0 ? array[left] : 0;
  }
  let mid = Math.floor((left + last) / 2);
  let index, crossLeftSum = 0, crossRightSum = 0;
  //1.求cross的情况-left
  for (index = mid; index >= left; index--) {
    crossLeftSum += array[index];
    if (crossLeftSum > maxCrossLeft) {
      maxCrossLeft = crossLeftSum;
    }
  }

  //2.求cross的情况-right
  for (index = mid + 1; index <= last; index++) {
    crossRightSum += array[index];
    if (crossRightSum > maxCrossRight) {
      maxCrossRight = crossRightSum;
    }
  }

  //3 递归求 array【left，mid】
  maxLeft = maxCrossingSum(array, left, mid);
  maxRight = maxCrossingSum(array, mid + 1, last);

  return Math.max(maxLeft, maxRight, maxCrossLeft + maxCrossRight)
}

//test
console.log(maxiumSubarray([1, -22, 3, 4, 5, 6, 7, 8]));