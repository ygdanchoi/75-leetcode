// https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s) {
    let best = '';
    
    for (let i = 0; i < s.length; i++) {
        // odd
        let rad = 0;
        while (i - rad >= 0 && i + rad < s.length) {
            if (s[i - rad] === s[i + rad]) {
                const curr = s.substring(i - rad, i + rad + 1);
                if (curr.length > best.length) {
                    best = curr;
                }
            } else {
                break;
            }
            rad++;
        }
        
        // even
        const j = i + 1;
        rad = 0;
        while (i - rad >= 0 && j + rad < s.length) {
            if (s[i - rad] === s[j + rad]) {
                const curr = s.substring(i - rad, j + rad + 1);
                if (curr.length > best.length) {
                    best = curr;
                }
            } else {
                break;
            }
            rad++;
        }
    }
    
    return best;
}