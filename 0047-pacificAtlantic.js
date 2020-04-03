// https://leetcode.com/problems/pacific-atlantic-water-flow/

function pacificAtlantic(matrix) {
    const PACIFIC = 0;
    const ATLANTIC = 1;
    const seen = new Array(2).fill(false).map(ocean => {
        return new Array(matrix.length).fill(false).map(row => {
            return new Array(matrix[0].length).fill(false);
        });
    });
    
    function canReach(ocean, r, c) {
        if (isPacific(r, c)) {
            return ocean === PACIFIC;
        } else if (isAtlantic(r, c)) {
            return ocean === ATLANTIC;
        } else if (seen[ocean][r][c]) {
            return false;
        }
        
        seen[ocean][r][c] = true;
        
        const directions = [
            [r - 1, c + 0],
            [r + 1, c + 0],
            [r + 0, c - 1],
            [r + 0, c + 1]
        ];
        const result = directions
            .filter(dir => shouldFlow(matrix[r][c], ...dir))
            .some(dir => canReach(ocean, ...dir));
                
        seen[ocean][r][c] = false;
        return result;
    }
    
    function shouldFlow(curr, r, c) {
        if (isPacific(r, c) || isAtlantic(r, c)) {
            return true;
        } else {
            const next = matrix[r][c];
            return curr >= next;
        }
    }
    
    function isPacific(r, c) {
        return r < 0 || c < 0;
    }
    
    function isAtlantic(r, c) {
        return r >= matrix.length || c >= matrix[0].length;
    }
    
    const result = [];
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (canReach(PACIFIC, r, c) && canReach(ATLANTIC, r, c)) {
                result.push([r, c]);
            }
        }
    }
    
    return result;
}