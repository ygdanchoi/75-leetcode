// https://leetcode.com/problems/longest-increasing-subsequence/

class Solution {
    public int lengthOfLIS(int[] nums) {
        int[][] memo = new int[nums.length][nums.length];
        
        for (int r = 0; r < memo.length; r++) {
            for (int c = 0; c < memo[0].length; c++) {
                memo[r][c] = -1;
            }
        }
        
        return step(0, -1, nums, memo);
    }
    
    private int step(int i, int prevI, int[] nums, int[][] memo) {
        if (i == nums.length) {
            return 0;
        } else if (memo[i][prevI + 1] != -1) {
            return memo[i][prevI + 1];
        }
        
        boolean isIncreasing = (prevI == -1)
            || nums[prevI] < nums[i];
        int take = isIncreasing
                ? 1 + step(i + 1, i, nums, memo)
                : -1;
        int skip = step(i + 1, prevI, nums, memo);
        
        memo[i][prevI + 1] = Math.max(take, skip);
        return Math.max(take, skip);
    }
}