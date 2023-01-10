// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let rotateIndex = findRotateIndex(nums)
    if (nums.length === 1){
        return nums[0] === target ? 0: -1
    }

    if (rotateIndex === 0) {
        return searchInRange(target, nums, 0, nums.length - 1)
    }
    if (nums[0] > target) {
        return searchInRange(target, nums, rotateIndex, nums.length - 1)
    } else {
        return searchInRange(target, nums, 0, rotateIndex - 1)
    }
};

function findRotateIndex(nums) {
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) {
        return 0
    }
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2)

        if (nums[pivot] > nums[pivot + 1]) {
            return pivot + 1
        } else if (nums[left] > nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
}

function searchInRange(target, nums, left, right) {
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2)
        if (nums[pivot] > target) {
            right = pivot - 1;
        } else if (nums[pivot] < target) {
            left = pivot + 1
        } else {
            return pivot
        }
    }
    return -1;
}

console.log(search([5], 5))
console.log(search([6, 5], 5))
console.log(search([3, 5], 5))
console.log(search([3, 4], 5))
console.log(search([4,5,6,1,2,3], 5))