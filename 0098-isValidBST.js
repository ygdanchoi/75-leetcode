// https://leetcode.com/problems/validate-binary-search-tree/

function isValidBST(root) {
    return step(root, -Infinity, Infinity);
}

function step(node, min, max) {
    if (!node) {
        return true;
    } else if (node.val <= min || max <= node.val) {
        return false;
    } else {
        return step(node.left, min, node.val)
            && step(node.right, node.val, max);
    }
}