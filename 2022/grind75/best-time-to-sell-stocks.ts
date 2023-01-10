function maxProfit(prices: number[]): number {
    let maxProfitAmount = 0
    let maxAmount = 0

    for (let i = prices.length - 1; i >= 0; i--) {
        const amount = prices[i];

        console.log({amount, maxAmount, maxProfitAmount})

        if (amount > maxAmount) {
            maxAmount = amount
            continue
        }

        if (maxAmount - amount > maxProfitAmount) {
            maxProfitAmount = maxAmount - amount
        } 
    }

    return maxProfitAmount
};
