// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
    let bestProfit = 0;
    let localMax = -Infinity;
    
    for (let i = prices.length - 1; i >= 0; i--) {
        const price = prices[i];
        
        if (price > localMax) {
            localMax = price;
        } else {
            bestProfit = Math.max(bestProfit, localMax - price);
        }
    }
    
    return bestProfit;
}