// https://leetcode.com/problems/subtree-of-another-tree/

function isSubtree(s, t) {
    if (isSame(s, t)) {
        return true;
    } else if (!s || !t) {
        return false;
    } else {
        return isSubtree(s.left, t) || isSubtree(s.right, t);
    }
}

function isSame(s, t) {
    if (!s && !t) {
        return true;
    } else if (!s || !t) {
        return false;
    } else if (s.val !== t.val) {
        return false;
    } else {
        return isSame(s.left, t.left) && isSame(s.right, t.right);
    }
}