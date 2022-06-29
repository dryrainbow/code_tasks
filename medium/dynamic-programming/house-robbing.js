// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    let store = {}

    function robReq(position) {
        if (position >= nums.length) {
            return 0
        }

        if (position in store) {
            return store[position]
        }

        store[position] = nums[position] + Math.max(robReq(position + 2), robReq(position + 3))
        return store[position]        
    }

    return Math.max(robReq(0), robReq(1))
};

function rob(nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }

    let store = Array(nums.length)

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        store[i] = num + Math.max((store[i + 2] || 0), (store[i + 3] || 0))
    }
    return Math.max(store[0], store[1])
}

console.log(robIterative([1,2,3,1]), 4)
console.log(robIterative([2,7,9,3,1]), 12)