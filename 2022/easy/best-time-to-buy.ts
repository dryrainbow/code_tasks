// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let sum = 0;
    let max = 0;
    
    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > max) {
            max = prices[i]
        } else {
            sum = Math.max(sum, max - prices[i]);
        }

    }

    return sum;
};

console.log(maxProfit([4,7,1,2,11]))