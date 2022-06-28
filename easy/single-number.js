// https://leetcode.com/problems/single-number/submissions/
// I don't want to interrupt my combo =(

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let store = {}

    nums.forEach((el)=>{
        if (el in store) {
            delete store[el]
        } else {
            store[el] = true
        }
    })
    return Object.keys(store)[0]
};
