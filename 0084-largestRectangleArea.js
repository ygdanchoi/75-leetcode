// https://leetcode.com/problems/largest-rectangle-in-histogram/

function largestRectangleArea(heights) {
  let best = 0;
  const stack = []
  
  for (let i = 0; i < heights.length; i++) {
      const height = heights[i];
      let leftI = i;
      
      while (stack.length > 0 && height < stack[stack.length - 1].height) {
          leftI = stack.pop().i;
      }
      
      stack.push({ height, i: leftI });
      
      for (const left of stack) {
          const width = i - left.i + 1;
          best = Math.max(best, width * left.height);
      }
  }
  
  return best;
}