// https://leetcode.com/problems/single-number/submissions/
// I don't want to interrupt my combo =(

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let comb = 0
    nums.forEach(num => {
        comb ^= num
    })
     
    return comb
};

