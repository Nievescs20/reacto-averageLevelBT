/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function averageOfLevels(root) {
  if (root === null) return [];

  const result = [];

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelCount = 0;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      levelCount += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelCount / levelSize);
  }

  return result;
}

const test1 = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
);

const test2 = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(15, null, null), new TreeNode(7, null, null)),
  new TreeNode(20, null, null)
);

console.log(averageOfLevels(test1));
console.log(averageOfLevels(test2));
