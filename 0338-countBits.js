// https://leetcode.com/problems/counting-bits/

function countBits(num) {
  const counts = [];
  
  for (let i = 0; i <= num; i++) {
      let count = 0;
      let curr = i;
      while (curr) {
          if (curr & 1) {
              count++;
          }
          curr = curr >> 1;
      }
      counts.push(count);
  }
  
  return counts;
}