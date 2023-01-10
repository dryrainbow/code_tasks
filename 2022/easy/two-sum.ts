// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    let numsWithIndexes = nums.map((num, i) => ({num, index: i})).sort((a, b) => a.num - b.num)
    let i = 0;
    let j = numsWithIndexes.length - 1;

    while (i < j) {
        let sum = numsWithIndexes[i].num + numsWithIndexes[j].num;
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i ++;
        } else {
            return [numsWithIndexes[i].index, numsWithIndexes[j].index]
        }
    }
};