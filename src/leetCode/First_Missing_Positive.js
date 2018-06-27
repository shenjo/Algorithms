//Given an unsorted integer array, find the smallest missing positive integer.

/*
Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive1 = (nums)=> {
    nums.sort((a,b)=>a-b);
    let length =nums.length,index=0,start =1;
    while(index<length && nums[index]<=start){
      if(nums[index] === start ){
        start++;
      }
      index++;
    }
    return start;
};


// better solution
const firstMissingPositive = nums => {
  let i = 0 , size = nums.length;
  while(i<size){
    let currentVal = nums[i];
    if(currentVal === i+1){
      i++ ;     // 当前值在正确的位置上.  比如第一个位置就是1
    }else if(currentVal <=0 || currentVal > size || currentVal === nums[currentVal-1]){
      //当前值不符合要求(1.不是正整数2.超过数的范围 3.跟这个值应放在的位置的值一样)，丢掉,用nums的最后一个来换
      nums[i] = nums[--size];
    }else{
      // 将当前值放到正确的位置上去
      nums[i] = nums[currentVal-1];
      nums[currentVal-1] = currentVal;
    }
  }
  return i+1;
};

console.log(firstMissingPositive([2,2]));
