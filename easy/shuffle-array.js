// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const result = []
    for (let i = 0, right = n; i < n; i++, right++) {
        result.push(nums[i], nums[right])
    }
    return result
};

console.log(shuffle([2,5,1,3,4,7], 3), [2,3,5,4,1,7] )