function isSameTree(p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    }
    
    const l = isSameTree(p.left, q.left);
    const r = isSameTree(p.right, q.right);
    
    return l && r;
}