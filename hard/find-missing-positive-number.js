// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numberOfPositive = 0

    nums.forEach(n => {
        if (n > 0) {
            numberOfPositive ++ 
        }
    })

    if (numberOfPositive == 0) {
        return 1
    }

    let i = nums.length - 1
    while (i >= 0) {
        let curNum = nums[i]
        if (curNum <= 0 || curNum > numberOfPositive || curNum == nums[curNum - 1]) {
            i--;
            continue
        };
        nums[i] = nums[curNum - 1]
        nums[curNum - 1] = curNum
        if (!(nums[i] != i + 1 && nums[i] <= numberOfPositive)) {
            i--;
        }
    }
    for (let i = nums.length - 1; i > -1; i--) {
    }
    for (let i = 0; i < numberOfPositive; i++) {
        if (nums[i] != i + 1) {
            if (i == 0) {
                return 1
            } else {
                return nums[i - 1] + 1
            }
        }
    }
    return nums[numberOfPositive - 1] + 1
};

console.log(firstMissingPositive([11,1,6,11,5,5,-6,9,-3,9,5,4,2,-8,16,-6,-4,2,3]))