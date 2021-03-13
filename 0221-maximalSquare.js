function maximalSquare(matrix) {
    let maxLength = 0;
    const memo = {};
    
    function step(r, c) {
        const key = `${r},${c}`;
        
        if (r === matrix.length || c === matrix[0].length) {
            return 0;
        } else if (matrix[r][c] === '0') {
            return 0;
        } else if (memo[key] !== undefined) {
            return memo[key];
        }
                        
        memo[key] = 1 + min(
            step(r + 1, c + 0), // s
            step(r + 0, c + 1), // e
            step(r + 1, c + 1)  // se
        );
        return memo[key];
    }
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            const length = step(r, c);
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength * maxLength;
}

function min(...nums) {
    let min = Infinity;
    
    for (const num of nums) {
        min = Math.min(min, num);
    }
    
    return min;
}
