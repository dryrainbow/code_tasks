/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] > target) {
            right = mid - 1
            continue
        }
        if (nums[mid] < target) {
            left = mid + 1
            continue
        }
        return mid
    }
    return -1
};
console.log(search([-1,0,3,5,9,12], 9))