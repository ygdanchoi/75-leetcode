// https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s, k) {
    function getChars() {
        const chars = {};
        
        for (const char of s) {
            chars[char] = true;
        }
        
        return Object.keys(chars);
    }
    
    function getLength(char, lives) {
        let best = 0;
        let i = 0;
        let j = 0;
        
        while (j < s.length) {
            if (s[j] !== char) {
                lives--;
            }
            
            while (lives < 0) {
                if (s[i] !== char) {
                    lives++;
                }
                i++;
            }
            
            best = Math.max(best, j - i + 1);
            j++;
        }
        
        return best;
    }
    
    let best = 0;
    
    for (const char of getChars()) {
        best = Math.max(best, getLength(char, k));
    }
    
    return best;
}