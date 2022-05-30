// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// too slow
function maxProfit(prices: number[]): number {
    let sum = 0;
    let min = prices[0];
    let tempMin: number | null = null;
    let max = 0;

    for (let i = 1; i < prices.length; i ++) {
        let curNum = prices[i]
        if (tempMin !== null && (curNum - tempMin > sum)) {
            max = curNum;
            min = tempMin;
            sum = max-min;
            tempMin = null
        }

        if (curNum > max) {
            max = curNum
            sum = Math.max(max - min, sum)
        }
  
        if (min > curNum) {
            tempMin = tempMin !== null ? Math.min(tempMin, curNum): curNum;
        }
    }
    return sum
};

console.log(maxProfit([4,7,1,2,11]))