/**
 * Created by SHENJO on 9/8/2017.
 */

/**
 * 典型的分治算法-- 归并排序
 */
function merge_sort (array) {
  const first = 0, last = array.length - 1;

  function sort (array, first, last) {
    if (last - first < 1) {
      return;
    }
    let middle = Math.floor((last + first) / 2);
    sort(array, first, middle);
    sort(array, middle + 1, last);

    let temp, i;
    // 【first,....middle.....last】 =>  first-middle（A） 以及 middle+1(B) --- last都已经是排好序的了
    // merge这两段，
    while (first <= middle && middle + 1 <= last) {
      if (array[first] > array[middle + 1]) {
        // A段中当前元素比 B 段中的元素大，说明B段的这个元素要移动到A段当前元素的位置，而A段当前元素往后全部要往前移动一位
        temp = array[middle + 1];
        for (i = middle; i >= first; i--) {
          array[i + 1] = array[i];
        }
        array[first] = temp;
        middle++;
      } else {
        //A段中的元素比B段小，比较A段中的下一个元素和B段的第一个
        first++;
      }
    }
    return array;

  }

  return sort(array, first, last);
}

// console.log(merge_sort([100, 56, 23, 354, 123, 12, 12, 3, 32, 45, 12, 12, 1]));

module.exports = merge_sort;