// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let store = Array(nums.length).fill(false)
    store[nums.length - 1] = true
    
    for(let cur = nums.length - 2; cur >= 0; cur --) {
        for(let i = 1; i <= nums[cur]; i ++) {
            if (store[cur + i] == true) {
                store[cur] = true
                break
            }
        }
    }
    return store[0]; 
};
