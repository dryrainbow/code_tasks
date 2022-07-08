// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    let result = Array(nums.length)

    for (let i = nums.length - 1; i >= 0; i--) {
        let max;
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            max = nums[left];
            left++;
        } else {
            max = nums[right];
            right --;
        }
        result[i] = max ** 2;
    }

    return result
};

console.log(sortedSquares([1, 2]))