// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    let temp1 = new Array(nums.length)
    temp1[0] = 1
    let temp2 = new Array(nums.length)
    temp2[temp1.length-1] = 1

    for (let i = 1; i < nums.length; i++) {
        temp1[i] = temp1[i - 1] * nums[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        temp2[i] = temp2[i + 1] * nums[i + 1]
        temp1[i] = temp2[i] * temp1[i]
    }
    return temp1
};

console.log(productExceptSelf([1,2,3,4]))

// [1,2,3,4] =>     [24,12,8,6]

// [-1,1,0,-3,3] => [0,0,9,0,0]