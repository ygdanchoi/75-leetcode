// https://leetcode.com/problems/reverse-bits/

function reverseBits(n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
      result = result << 1;
      result = result | (n & 1);
      if (n != 0) {
          n = n >> 1;    
      }
  }
  
  if (result < 0) {
      result += 2**32;
  }

  return result;
}