// https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n) {
  let result = 0;
  
  for (let i = 0; i < 32; i++) {
      if (n & (1 << i)) {
          result++;
      }
  }
  
  return result;
}