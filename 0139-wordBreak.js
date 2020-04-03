// https://leetcode.com/problems/word-break/

function wordBreak(s, wordDict) {
    const memo = new Array(s.length + 1).fill(-1);
    
    function step(i) {
        if (i === s.length) {
            return true;
        } else if (memo[i] !== -1) {
            return memo[i];
        }
        
        for (let w = 0; w < wordDict.length; w++) {
            const word = wordDict[w];
            
            if (shouldStep(i, word) && step(i + word.length)) {
                memo[i] = true;
                return true;
            }
        }
        
        memo[i] = false;
        return false;
    }
    
    function shouldStep(i, word) {
        if (i + word.length > s.length) {
            return false;
        }
        
        for (let w = 0; w < word.length; w++) {
            const j = i + w;
            
            if (s[j] !== word[w]) {
                return false;
            }
        }
        
        return true;
    }
    
    return step(0);
}