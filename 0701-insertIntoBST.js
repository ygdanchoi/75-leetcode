// https://leetcode.com/problems/insert-into-a-binary-search-tree/

function insertIntoBST(root, val) {
  const LEFT = -1;
  const RIGHT = 1;
  
  let prev = null;
  let facing = 0;
  let curr = root;
  
  while (curr) {
      prev = curr;
      
      if (val < curr.val) {
          curr = curr.left;
          facing = LEFT;
      } else {
          curr = curr.right;
          facing = RIGHT;
      }
  }
  
  const node = new TreeNode(val);
  
  if (facing === LEFT) {
      prev.left = node;
  } else if (facing === RIGHT) {
      prev.right = node;
  } else {
      return node;
  }
  
  return root;
}

function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    
    return root;
}

// with AVL rebalancing
function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    update(root);
    
    if (root.balance < -1) {
        if (root.left.balance <= 0) {
            return rotateRight(root);
        } else {
            root.left = rotateLeft(root.left)
            return rotateRight(root);
        }
    } else if (root.balance > 1) {
        if (root.right.balance >= 0) {
            return rotateLeft(root); 
        } else {
            root.right = rotateRight(root.right);
            return rotateLeft(root);   
        }
    } else {
        return root;
    }
}

function rotateLeft(node) {
    const right = node.right;
    node.right = right.left;
    right.left = node;
    
    update(node);
    update(right);
    return right;
}

function rotateRight(node) {
    const left = node.left;
    node.left = left.right;
    left.right = node;
    
    update(node);
    update(left);
    return left;
}

function update(node) {
    const lh = node.left
        ? node.left.height
        : 0;
    const rh = node.right
        ? node.right.height
        : 0;
    node.balance = rh - lh;
    node.height = 1 + Math.max(lh, rh);
}