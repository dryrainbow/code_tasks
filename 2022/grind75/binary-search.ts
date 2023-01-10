function search(nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.trunc((right - left) / 2) + left;

        if (nums[mid] == target) return mid
        if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    if (nums[left] === target) return left;
    return -1;
};

