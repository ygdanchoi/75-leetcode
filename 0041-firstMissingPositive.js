// https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums) {
  const n = nums.length;
  const offset = n + 1;
  
  for (let i = 0; i < n; i++) {
      const num = nums[i];
      if (num < 1 || num > n) {
          nums[i] = 0;
      }
  }
  
  for (const token of nums) {
      const num = token % offset;
      if (num !== 0) {
          nums[num - 1] += offset;
      }
  }
      
  for (let i = 0; i < n; i++) {
      if (nums[i] < offset) {
          return i + 1;
      }
  }
  
  return n + 1;
}