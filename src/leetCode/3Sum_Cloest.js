/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let current = null, distance = Number.MAX_VALUE, result;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (current === nums[i]) {
            continue;
        } else {
            current = nums[i];
        }

        let low = i + 1, high = len - 1;
        while (low < high) {
            const sum = nums[low] + nums[high] + current;
            if (sum === target) {
                return sum;
            } else if (sum > target) {
                high--;
            } else {
                low++;
            }
            if (Math.abs(sum - target) < distance) {
                distance = Math.abs(sum - target);
                result = sum;
            }
        }


    }
    return result;


};


console.log(threeSumClosest([1, 1, 1, 0], -100));
