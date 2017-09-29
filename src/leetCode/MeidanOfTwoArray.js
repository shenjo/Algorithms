/**
 * Created by SHENJO on 8/21/2017.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var arr = nums1.concat(nums2)
  return arr.reduce(function(sum,val){
      return sum+val
    },0)/arr.length;
};

console.log(findMedianSortedArrays( [1, 3],[2]));