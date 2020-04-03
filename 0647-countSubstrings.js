// https://leetcode.com/problems/palindromic-substrings/

function countSubstrings(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {        
        // odd
        let rad = 0;
        while (i - rad >= 0 && i + rad < s.length) {
            if (s[i - rad] === s[i + rad]) {
                count++;
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
                count++;
            } else {
                break;
            }
            rad++;
        }
    }
    
    return count;
}