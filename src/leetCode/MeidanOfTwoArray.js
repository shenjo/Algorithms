/**
 * Created by SHENJO on 8/21/2017.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 中位数 当n是偶数时  s = (A[n/2]+A[n/2+1]) /2  n是奇数 s = A[（n+1）/2]
const findMedianSortedArrays = function (nums1, nums2) {
    let nums = [], len = nums1.length + nums2.length, inx1 = 0, inx2 = 0;
    nums1.push(Number.MAX_VALUE);
    nums2.push(Number.MAX_VALUE);
    for (let i = 0; i < len; i++) {
        if (nums1[inx1] > nums2[inx2]) {
            nums.push(nums2[inx2++]);
        } else {
            nums.push(nums1[inx1++]);
        }
    }
    if (len % 2 === 0) {
        return (nums[len / 2] + nums[len / 2 - 1]) / 2
    } else {
        return nums[(len + 1) / 2 - 1];
    }
};

console.log(findMedianSortedArrays([1, 2], [3]));
