// https://leetcode.com/problems/rotate-image/

function rotate(matrix) {
    const n = matrix.length;
    
    for (let r = 0; r < Math.floor(n / 2); r++) {
        for (let c = r; c < n - 1 - r; c++) {
            const temp = matrix[r][c];
            matrix[r][c] = matrix[n - 1 - c][r];
            matrix[n - 1 - c][r] = matrix[n - 1 - r][n - 1 - c];
            matrix[n - 1 - r][n - 1 - c] = matrix[c][n - 1 - r];
            matrix[c][n - 1 - r] = temp;
        }
    }
    
    return matrix;
}