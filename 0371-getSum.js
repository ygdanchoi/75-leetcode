// https://leetcode.com/problems/sum-of-two-integers/

function getSum(a, b) {
  while (b) {
      const carry = (a & b) << 1;
      a = a ^ b;
      b = carry;
  }
  
  return a;
}