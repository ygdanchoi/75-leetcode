// https://leetcode.com/problems/coin-change/

function coinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    
    const memo = new Array(amount + 1).fill(-1);
    
    function step(bal) {
        if (bal === 0) {
            return 0;
        } else if (bal < 0) {
            return Infinity;
        } else if (memo[bal] !== -1) {
            return memo[bal];
        }
        
        let best = Infinity;
        
        for (const coin of coins) {
            const curr = 1 + step(bal - coin);
            best = Math.min(best, curr);
        }
        
        memo[bal] = best;
        return best;
    }
    
    const result = step(amount);
    return (result !== Infinity)
        ? result
        : -1;
}