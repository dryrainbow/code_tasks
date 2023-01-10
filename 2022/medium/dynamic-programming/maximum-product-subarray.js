// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const store = {}

    function maxProductReq(position, prev = 0) {
        if (position === nums.length) {
            return prev
        }
        if (store[`${position}${prev}`]) {
            return store[`${position}${prev}`]
        }
        if (position === 0) {
            store[position] = maxProductReq(position + 1, nums[position])
            return store[position]
        } else {
            store[`${position}${prev}`] = Math.max(
                prev,
                nums[position],
                nums[position] * prev,
                maxProductReq(position + 1, nums[position]),
                maxProductReq(position + 1, nums[position] * prev)
            );
            return store[`${position}${prev}`]
        }       
    }
    return maxProductReq(0)
};

console.log(maxProduct([3]), 3)
console.log(maxProduct([2,3]), 6)
console.log(maxProduct([-2,0,-1]), 0)
console.log(maxProduct([2,3,-2,4]), 6)
console.log(maxProduct([-3,0,1,-2]), 1)
console.log(maxProduct([6,-5,-1,5,1,6,-5,-1,2,4,-2,-6,0,2,1,-6,1,6,-6,-3,4,1,1,0,6,2,0,1,-4,0,-1,1,5,-1,2,4,1,1,5,0,2,-6,2,0,-2,5,4,1,5,2]), 432000)