// https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        } else if (char === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        } else if (char === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        } else {
            throw 'unexpected character';
        }
    }
    
    return stack.length === 0;
}