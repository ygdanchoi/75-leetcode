// https://leetcode.com/problems/jump-game-ii/

function jump(nums) {
  let jumps = 0;
  let currEnd = 0;
  let currFarthest = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
      currFarthest = Math.max(currFarthest, i + nums[i]);
      
      if (i === currEnd) {
          jumps++;
          currEnd = currFarthest;
      }
  }
  
  return jumps++;
}