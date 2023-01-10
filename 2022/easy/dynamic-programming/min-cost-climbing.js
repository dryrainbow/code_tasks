/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const store = {}

    function minCostClimbingReq(arr, position) {
    
        if (store[position] !== undefined) {
            return store[position]
        }

        if (position < 2) {
            return arr[position]
        }
        let cur = arr[position] || 0
        store[position] = cur + Math.min(minCostClimbingReq(arr, position - 1), minCostClimbingReq(arr, position - 2))
        return store[position]
    }
    
    return minCostClimbingReq(cost, cost.length)
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))