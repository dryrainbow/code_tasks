// https://leetcode.com/problems/container-with-most-water/submissions/

const getSum = (height, left, right) => Math.min(height[left], height[right]) * (right - left)
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxAreaSum = getSum(height, left, right)

    while (left < right) {
        if (height[left] <= height[right]) {
            left += 1
        } else {
            right -= 1
        }
        maxAreaSum = Math.max(getSum(height, left, right), maxAreaSum)
    }

    return maxArea
};
