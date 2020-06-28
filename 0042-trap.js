// https://leetcode.com/problems/trapping-rain-water/

function trap(heights) {
  let l = 0;
  let r = heights.length - 1;
  let water = 0;
  
  while (l <= r) {
      if (heights[l] < heights[r]) {
          if (l > 0 && heights[l - 1] > heights[l]) {
              water += heights[l - 1] - heights[l];
              heights[l] = heights[l - 1];
          }
          l++
      } else {
          if (r < heights.length - 1 && heights[r] < heights[r + 1]) {
              water += heights[r + 1] - heights[r];
              heights[r] = heights[r + 1];
          }        
          r--;
      }
  }
      
  return water;
}