// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = -Infinity
    let currentMax = max

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentMax + nums[i]) {
            currentMax = nums[i]
        } else {
            currentMax = currentMax + nums[i]
        }
        max = Math.max(currentMax, max)
    }
    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6