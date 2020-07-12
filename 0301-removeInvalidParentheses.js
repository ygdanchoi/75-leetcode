// https://leetcode.com/problems/remove-invalid-parentheses/

function removeInvalidParentheses(string) {
  const candidates = new Set();
  let bestLength = 0;
  
  function step(i, candidate, openParens) {
      if (i === string.length) {
          if (openParens === 0) {
              candidates.add(candidate.join(''));
              bestLength = Math.max(bestLength, candidate.length);
          }
          return;
      } else if (string[i] === '(') {
          // skip
          step(i + 1, candidate, openParens);
          
          // take
          candidate.push(string[i]);
          step(i + 1, candidate, openParens + 1);
          candidate.pop();
      } else if (string[i] === ')') {
          // skip
          step(i + 1, candidate, openParens);
          
          if (openParens > 0) {
              // take
              candidate.push(string[i]);
              step(i + 1, candidate, openParens - 1);
              candidate.pop();
          }
      } else {
          candidate.push(string[i]);
          step(i + 1, candidate, openParens);
          candidate.pop();
      }        
  }
  
  step(0, [], 0);
  return [...candidates].filter(candidate => candidate.length === bestLength);
}