// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]
    for (let i = 0; i < nums.length; i++) {
        result.push([nums[i]])
        let longest = [nums[i]]
        for (let j = i + 1; j < nums.length; j++) {
            result.push([nums[i], nums[j]])
            longest = [...longest, nums[j]]
            if (longest.length != result[result.length - 1].length) {
                result.push(longest)
            }
        }
    }

    return result
};

console.log(subsets([3,2,4,1]))