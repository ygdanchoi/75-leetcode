function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    
    const l = maxDepth(root.left);
    const r = maxDepth(root.right);

    return 1 + Math.max(l, r);
}