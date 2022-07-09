// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k = k % nums.length

    let res = Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        res[(k + i) % nums.length] = nums[i] 
    }
    res.forEach((num, i) => {
        nums[i] = num
    })

    return nums
 }

/**
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */
// [1,2,3,4,5,6]
//  2
/**
 * 
[-1,-100,3,99]
2

[3,99,-1,-100]
 */
console.log(rotate([1,2,3], 2))