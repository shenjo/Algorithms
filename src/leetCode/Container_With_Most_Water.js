/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let leftIndex = 0, rightIndex = height.length-1, maxArea = 0;
  for (; leftIndex < rightIndex;) {
    let leftHeight = height[leftIndex], rightHeight = height[rightIndex];
    let area = (rightIndex - leftIndex) * (leftHeight > rightHeight ? rightHeight : leftHeight);
    maxArea = maxArea >= area ? maxArea : area;
    leftHeight > rightHeight ? rightIndex-- : leftIndex++;
  }
  return maxArea;
};

console.log(maxArea([4,1]))
