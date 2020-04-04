// https://leetcode.com/problems/decode-ways/

function numDecodings(s) {
    const memo = new Array(s.length + 1).fill(-1);
    
    function step(i) {
        if (i === s.length) {
            return 1;
        } else if (memo[i] !== -1) {
            return memo[i];
        }
        
        const take1 = canTake1(i)
            ? step(i + 1)
            : 0;
        const take2 = canTake2(i)
            ? step(i + 2)
            : 0;
        
        memo[i] = take1 + take2;
        return take1 + take2;
    }
    
    function canTake1(i) {
        return s[i] !== '0';
    }
    
    function canTake2(i) {
        if (i + 1 >= s.length) {
            return false;
        } else if (s[i] === '1') {
            return true;
        } else if (s[i] === '2') {
            return '0' <= s[i + 1] && s[i + 1] <= '6';
        } else {
            return false;
        }
    }
    
    return step(0);
}