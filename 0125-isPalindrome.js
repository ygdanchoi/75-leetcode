function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (!isAlphaNumeric(s[i])) {
            i++;
        } else if (!isAlphaNumeric(s[j])) {
            j--;
        } else if (toLowerCase(s[i]) !== toLowerCase(s[j])) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    
    return true;
}

function toLowerCase(char) {
    return char.toLowerCase();
}

function isAlphaNumeric(char) {
    return 'a' <= char && char <= 'z'
        || 'A' <= char && char <= 'Z'
        || '0' <= char && char <= '9';
}