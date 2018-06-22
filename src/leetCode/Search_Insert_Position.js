/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const length = nums.filter(num => num <= target).length;
  return nums[length-1] === target ? length-1 : length;
};