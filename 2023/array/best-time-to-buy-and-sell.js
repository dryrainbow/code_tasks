// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let maxPrice = 0
    for (let i = prices.length - 1; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i])
        max = Math.max(max, maxPrice - prices[i])
    }
    return max
};

console.log(maxProfit([1,2,3,4]))