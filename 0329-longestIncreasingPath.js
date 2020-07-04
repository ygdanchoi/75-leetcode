// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/

function longestIncreasingPath(matrix) {    
  const memo = new Array(matrix.length).fill(null).map(row => {
      return new Array(matrix[0].length).fill(null);
  });
  
  let result = 0;
  
  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          result = Math.max(result, step(r, c, -Infinity));
      }
  }
  
  function step(r, c, prev) {
      if (!isInBounds(r, c)) {
          return 0;
      } else if (matrix[r][c] === null) {
          return 0;
      } else if (prev >= matrix[r][c]) {
          return 0;
      } else if (memo[r][c] !== null) {
          return memo[r][c];
      }
      
      const curr = matrix[r][c];
      matrix[r][c] = null;
      
      const n = step(r - 1, c + 0, curr);
      const s = step(r + 1, c + 0, curr);
      const w = step(r + 0, c - 1, curr);
      const e = step(r + 0, c + 1, curr);
      
      matrix[r][c] = curr;
      
      memo[r][c] = 1 + Math.max(
          Math.max(n, s),
          Math.max(w, e)
      );
      return memo[r][c];
  }
  
  function isInBounds(r, c) {
      return 0 <= r && r < matrix.length
          && 0 <= c && c < matrix[0].length;
  }
  
  return result;
}