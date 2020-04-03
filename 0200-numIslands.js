// https://leetcode.com/problems/number-of-islands/

function numIslands(grid) {
    const seen = new Array(grid.length).fill(false).map(row => {
        return new Array(grid[0].length).fill(false);
    });
    
    function step(r, c) {
        if (!isInBounds(r, c)) {
            return false;
        } else if (seen[r][c]) {
            return false;
        } else if (grid[r][c] === '0') {
            return false;
        }
        
        seen[r][c] = true;
        
        const n = step(r - 1, c + 0);
        const s = step(r + 1, c + 0);
        const w = step(r + 0, c - 1);
        const e = step(r + 0, c + 1);
        
        return true;
    }
    
    function isInBounds(r, c) {
        return 0 <= r && r < grid.length
            && 0 <= c && c < grid[0].length;
    }
    
    let islands = 0;
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (step(r, c)) {
                islands++;
            }
        }
    }
    
    return islands;
}