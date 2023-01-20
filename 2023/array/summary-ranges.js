// https://leetcode.com/problems/summary-ranges/solutions/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums[0].toString()]
    let left = 0;
    let result = [];

    for (let right = 1; right < nums.length; right++) {
        if (nums[right - 1] + 1 == nums[right]) {
            continue
        } else {
            result.push([nums[left], nums[right - 1]])
            left = right
        }
    }
    result.push([nums[left], nums[nums.length - 1]])

    return result.map(([a, b]) => {
        if (a === b) return a.toString();
        return `${a}->${b}`
    })
};