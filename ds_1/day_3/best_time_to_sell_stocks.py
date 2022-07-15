class Solution(object):
    def maxProfit(self, prices):
        profit = 0
        max_price = 0
        min_price = float('inf')

        for p in prices[::-1]:
            if p > max_price:
                max_price = p
                min_price = float('inf')
            elif min_price > p:
                min_price = p
            profit = max(profit, max_price - min_price)
        return profit


print(Solution().maxProfit([7,1,5,3,6,4]))