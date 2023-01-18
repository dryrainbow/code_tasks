// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const first = new Array(nums.length)
    const result = new Array(nums.length)
    first[0] = 1
    result[result.length - 1] = 1

    for (let i = 1; i < nums.length; i++) {
        first[i] = nums[i - 1] * first[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        result[i] = result[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < nums.length; i ++) {
        result[i] *= first[i]
    }
    return result
};

console.log(productExceptSelf([1, 2, 3, 4])) 