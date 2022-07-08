/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left, right, mid = -1;

    if (nums.length == 1) {
        return nums[0] >= target? 0: 1;
    }

    left = 0;
    right = nums.length;
    
    while (left <= right)
    {
        mid = left + Math.floor((right - left) / 2);

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    if (mid == nums.length) return mid;

    return nums[mid] > target? mid: mid + 1;
};

console.log(searchInsert([1,3,5,6], 7))