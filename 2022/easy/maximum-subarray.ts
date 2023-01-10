// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
    let maxSum = nums[0]
    let curSum = nums[0]

    for (let i = 1; i < nums.length; i ++ ) {
        if (nums[i] > curSum + nums[i]) {
            curSum = nums[i]
        } else {
            curSum += nums[i]
        }
        if (curSum > maxSum) {
            maxSum = curSum
        }
    }

    return maxSum;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1, 2]))