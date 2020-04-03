// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

function lowestCommonAncestor(root, p, q) {
    const pathP = getPath(root, p);
    const pathQ = getPath(root, q);
    return getLca(pathP, pathQ);
}

function getPath(root, target) {
    const path = [root];
    let curr = root;

    while (true) {
        if (target.val < curr.val) {
            path.push(curr.left);
            curr = curr.left;
        } else if (target.val > curr.val) {
            path.push(curr.right);
            curr = curr.right;
        } else if (target === curr) {
            break;
        } else {
            throw 'invalid BST';
        }
    }

    return path;
}

function getLca(pathP, pathQ) {
    let i = 0;
    let lca;

    while (pathP[i] && pathQ[i] && pathP[i] === pathQ[i]) {
        lca = pathP[i];
        i++;
    }

    return lca;
}