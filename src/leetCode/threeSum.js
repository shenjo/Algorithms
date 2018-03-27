/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time Limit Exceeded
const threeSum = function (nums) {
    //base on two sum  :given [1,2,7,4,6] ,9  return [[2,7]]
    console.time('Three sum')
    let result = [], hashKey = {}, len = nums.length, dict = {}; // hashKey for check duplicate
    for (let i = 0; i < len - 2; i++) {
        const number = nums[i];
        if (typeof dict[number] !== 'undefined') {
            continue;
        } else {
            dict[number] = true;
        }
        let wantedNum = 0 - number;
        let cache = {};
        for (let j = i + 1; j < len; j++) {
            let val = nums[j];
            if (typeof cache[val] !== 'undefined') {
                // check duplicate
                let key = `${Math.min(number, val, cache[val])}__${Math.max(number, val, cache[val])}`;
                if (!hashKey[key]) {
                    hashKey[key] = true;
                    result.push([number, val, cache[val]])
                }
            } else {
                cache[wantedNum - val] = val;
            }
        }
    }
    console.timeEnd('Three sum')
    return result;
};

// 剪枝之后passed
const newThreeNums = nums => {
    console.time('newThreeNums')
    let result = [], len = nums.length, target; // hashKey for check duplicate
    console.time('newThreeNums(es6) sorting')
    nums.sort((a, b) => a - b);
    console.timeEnd('newThreeNums(es6) sorting')
    for (let i = 0; i < len; i++) {
        if (target === nums[i] || nums[i] > 0) {
            continue;
        } else {
            target = nums[i]
        }
        let low = i + 1, high = len - 1;
        while (low < high) {
            let sum = nums[low] + nums[high];
            if (sum > -target) {
                high--;
            } else if (sum < -target) {
                low++
            } else {
                result.push([target, nums[low], nums[high]])
                do {
                    low++;
                } while (nums[low] === nums[low - 1]);
            }
        }
    }

    console.timeEnd('newThreeNums')
    return result;
}

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
newThreeNums([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])


threeSum([0, 0, 0])
console.log(newThreeNums([0, 0, 0]))


function es5Sort(nums) {
    console.time('es5 sorting')
    nums.sort(function (a, b) {
        return a - b;
    });
    console.timeEnd('es5 sorting')
}


function es6Sort(nums) {
    console.time('es6 sorting')
    nums.sort((a, b) => a - b);
    console.timeEnd('es6 sorting')
}
es5Sort([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
es6Sort([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])


