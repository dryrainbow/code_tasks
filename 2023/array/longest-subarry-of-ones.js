// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    let maxLength = 0;
    let currentLength = 0
    let leftOne = -1;
    let lastZero = -1;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (leftOne == -1) {
                leftOne = i
            }
            currentLength += 1
            maxLength = Math.max(currentLength, maxLength)
        }
        else {
            if (lastZero > leftOne) {
                currentLength = i - lastZero - 1
                leftOne = lastZero + 1
                while (nums[leftOne] != 1 && leftOne < nums.length) {
                    leftOne++;
                }
            }
            lastZero = i
        }
    }
    return lastZero == -1 ? maxLength - 1: maxLength
};

console.log(longestSubarray([1,1,0,0,1,1,1,0,1], 4))
console.log(longestSubarray([1,0,0,1,1,], 2))
console.log(longestSubarray([1,0,1,0,1,], 2))
console.log(longestSubarray([1,1,1,1], 3))
console.log(longestSubarray([0,0,0,0], 0))