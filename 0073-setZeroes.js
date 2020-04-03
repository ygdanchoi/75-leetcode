// https://leetcode.com/problems/set-matrix-zeroes/submissions/

function setZeroes(matrix) {
    const hadTopZero = matrix[0]
        .some(el => el === 0);
    const hadLeftZero = matrix
        .map(row => row[0])
        .some(el => el === 0);
    
    for (let r = 1; r < matrix.length; r++) {
        for (let c = 1; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }
    
    for (let r = 1; r < matrix.length; r++) {
        if (matrix[r][0] === 0) {
            fillRow(r);
        }
    }
    for (let c = 1; c < matrix[0].length; c++) {
        if (matrix[0][c] === 0) {
            fillCol(c);
        }
    }
    
    if (hadTopZero) {
        fillRow(0);
    }
    if (hadLeftZero) {
        fillCol(0);
    }
    
    function fillRow(r) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = 0;
        }
    }
    
    function fillCol(c) {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0;
        }
    }
    
    return matrix;
}