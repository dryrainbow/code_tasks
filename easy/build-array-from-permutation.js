// https://leetcode.com/problems/build-array-from-permutation/submissions/
// I'm on vacation
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    return nums.map(n => nums[n])
};