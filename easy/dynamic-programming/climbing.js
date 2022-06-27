/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const store = {}
    function climbStairsReq(n) {
        if (typeof store[n] !== 'undefined') return store[n];
        if (n <= 0) {
            return 0
        }
        if (n < 3) {
            return n 
        }
        
        store[n] = climbStairsReq(n - 1) + climbStairsReq(n - 2)
        return store[n]
    }

    return climbStairsReq(n)
};