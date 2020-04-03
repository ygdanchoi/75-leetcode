// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {    
    const counts = {};
    let best = 0;
    
    let i = 0;
    let j = 0;
    incr(s[0]);
    
    while (j < s.length) {        
        if (hasRepeating(j)) {
            decr(s[i]);
            i++;
        } else {
            best = Math.max(best, j - i + 1);
            j++;
            incr(s[j]);
        }
    }
    
    function incr(char) {
        if (counts[char] === undefined) {
            counts[char] = 0;
        }
        
        counts[char]++;
    }
    
    function decr(char) {
        counts[char]--;
        
        if (counts[char] === 0) {
            delete counts[char];
        }
    }
    
    function hasRepeating(j) {
        const char = s[j];
        return counts[char] !== 1;
    }
    
    return best;
}