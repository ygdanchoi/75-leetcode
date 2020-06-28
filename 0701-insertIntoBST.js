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