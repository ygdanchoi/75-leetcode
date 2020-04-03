// https://leetcode.com/problems/spiral-matrix/

function spiralOrder(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    
    const result = [];
    const dirs = [
        { r:  0, c:  1}, // e
        { r:  1, c:  0}, // s
        { r:  0, c: -1}, // w
        { r: -1, c:  0}  // n
    ];
    
    let r = 0;
    let c = 0;
    let d = 0;
    
    for (let i = 0; i < matrix.length * matrix[0].length; i++) {
        result.push(matrix[r][c]);
        matrix[r][c] = null;
        
        if (shouldTurn()) {
            d = (d + 1) % 4;
        }
        
        r += dirs[d].r;
        c += dirs[d].c;
    }
    
    function shouldTurn() {
        const nextR = r + dirs[d].r;
        const nextC = c + dirs[d].c;
        
        return !isInBounds(nextR, nextC)
            || matrix[nextR][nextC] === null;
    }
    
    function isInBounds(nextR, nextC) {
        return 0 <= nextR && nextR < matrix.length
            && 0 <= nextC && nextC < matrix[0].length;
    }
    
    return result;
}