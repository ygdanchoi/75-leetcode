// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    
    for (const price of prices) {
        const profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, price);
    }
    
    return maxProfit;
}