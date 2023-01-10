// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let right = prices.length - 1
    let left = right - 1
    let result = 0

    while (left >= 0 && right > left) {
        if (prices[right] > prices[left]) {
            result += prices[right] - prices[left]
        }
        right = left;
        left --;
    }

    return result
};

console.log(maxProfit([7,6,4,3,1]))