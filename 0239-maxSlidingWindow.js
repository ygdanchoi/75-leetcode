// https://leetcode.com/problems/sliding-window-maximum/

function maxSlidingWindow(nums, k) {
  const result = [];
  let deque = [];
  
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      
      if (deque.length > 0 && i - k === deque[0].i) {
          deque.shift();
      }
      
      if (deque.length === 0 || num >= deque[0].num) {
          deque = [{ num, i }];
      } else {
          while (num >= deque[deque.length - 1].num) {
              deque.pop();    
          }
          deque.push({ num, i });
      }
      
      if (i >= k - 1) {
          result.push(deque[0].num);    
      }
  }
  
  return result;
}