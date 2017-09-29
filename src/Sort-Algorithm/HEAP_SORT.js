/**
 * Created by SHENJO on 9/11/2017.
 */

/**
 * heap sort
 * @param array
 */
function heapSort (array) {
  buildHeap(array);
  let temp;
  for (let j = array.length - 1; j >= 1; j--) {
    temp = array[j];
    array[j] = array[0];
    array[0] = temp;
    maxHeapify(array, 0, j);
  }
  return array;
}

function buildHeap (array) {
  let length = array.length;
  for (let len = Math.floor(length / 2) - 1; len >= 0; len--) {
    maxHeapify(array, len, length);
  }
  return array;
}

/**
 * 维持堆给定的index在array中的堆特性： 比左右孩子都要大
 * @param array
 * @param index
 * @param len  -- heapSize
 */
function maxHeapify (array, index, len) {
  let largestIndex = index, leftChildIndex = index * 2 + 1, rightChildIndex = index * 2 + 2, temp;
  // 如果左孩子比给定元素大，标记左孩子为最大的
  if (leftChildIndex < len && array[leftChildIndex] > array[index]) {
    largestIndex = leftChildIndex;
  }
  //如果右孩子比当前最大的都大，则右孩子是最大的
  if (rightChildIndex < len && array[rightChildIndex] > array[largestIndex]) {
    largestIndex = rightChildIndex;
  }
  //如果给定元素不是最大的，和最大的元素交换位置,交换会导致被交换的孩子可能不满足堆性质，所以递归maxHeapify
  if (largestIndex !== index) {
    temp = array[index];
    array[index] = array[largestIndex];
    array[largestIndex] = temp;
    maxHeapify(array, largestIndex,len)
  }
}


console.log(heapSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]));