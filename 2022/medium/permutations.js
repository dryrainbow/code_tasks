// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = []

    /**
     * 
     * @param {number[]} res 
     */
    function permReq(res) {
        if (res.length === nums.length){
            results.push(res)
            return;
        };
        for (let i = 0; i < nums.length; i++) {
            if (res.indexOf(i) !== -1) continue;
            permReq([...res, i])
        }
    }
    permReq([])

    return results.map(comb=>comb.reduce((res, i)=>[...res, nums[i]], []))
};
