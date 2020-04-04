// https://leetcode.com/problems/number-of-islands/

class Solution {
    public int numIslands(char[][] grid) {
        if (grid.length == 0) {
            return 0;
        }
        
        int result = 0;
        boolean[][] seen = new boolean[grid.length][grid[0].length];
        
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (isNewIsland(grid, r, c, seen)) {
                    result++;
                }
            }
        }
        
        return result;
    }
    
    private boolean isNewIsland(char[][] grid, int r, int c, boolean[][] seen) {
        if (!isInBounds(grid, r, c)) {
            return false;
        } else if (seen[r][c]) {
            return false;
        } else if (grid[r][c] != '1') {
            return false;
        }
        
        seen[r][c] = true;
        
        isNewIsland(grid, r - 1, c + 0, seen); // n
        isNewIsland(grid, r + 1, c + 0, seen); // s
        isNewIsland(grid, r + 0, c - 1, seen); // w
        isNewIsland(grid, r + 0, c + 1, seen); // e
        
        return true;
    }
    
    private boolean isInBounds(char[][] grid, int r, int c) {
        return 0 <= r && r < grid.length
            && 0 <= c && c < grid[0].length; 
    }
}