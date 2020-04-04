// https://leetcode.com/problems/coin-change/

class Solution {
    private static final int INVALID = -1;
    
    public int coinChange(int[] coins, int amount) {
        int[] memo = new int[amount + 1];
        Arrays.fill(memo, -2);
        
        return step(coins, amount, memo);
    }
    
    private int step(int[] coins, int balance, int[] memo) {
        if (balance < 0) {
            return INVALID;
        } else if (balance == 0) {
            return 0;
        } else if (memo[balance] != -2) {
            return memo[balance];
        }
        
        int best = INVALID;
        
        for (int coin : coins) {
            int next = step(coins, balance - coin, memo);
            if (next == INVALID) {
                continue;
            }
            
            int curr = 1 + next;
            if (best == INVALID || curr < best) {
                best = curr;
            }
        }
        
        memo[balance] = best;
        return best;
    }
}