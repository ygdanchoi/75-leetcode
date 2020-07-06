// https://leetcode.com/problems/word-break-ii/

function wordBreak(string, wordDict) {
  const memo = {};
  const trie = { w: 0 };
  
  function createTrie() {
      for (const word of wordDict) {
          let curr = trie;
          
          for (let w = 0; w < word.length; w++) {
              curr.w = w;
              const char = word[w];
              
              if (curr[char] === undefined) {
                  curr[char] = {};
              }
              curr = curr[char];
          }
          
          curr.w = word.length;
          curr['*'] = {};
      }
  }
  
  function step(i, curr) {
      const key = `${i}, ${curr.w}`;
      
      if (i === string.length && curr['*'] !== undefined) {
          return [''];
      } else if (memo[key] !== undefined) {
          return memo[key];
      }
      
      const sentences = [];
      const char = string[i];
      
      if (curr[char] !== undefined) {
          for (const sentence of step(i + 1, curr[char])) {
              sentences.push(char.concat(sentence));
          }
      }
      
      if (curr['*'] !== undefined) {
          for (const sentence of step(i, trie)) {
              sentences.push(' '.concat(sentence));
          }
      }
      
      memo[key] = sentences;
      return sentences;
  }
  
  createTrie();
  return step(0, trie);
}