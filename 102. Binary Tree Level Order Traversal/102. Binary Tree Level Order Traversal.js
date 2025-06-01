/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length > 0) {
        let level = queue.length;
        let demo = [];
        for (let i = 0; i < level; i++) {
            let curr = queue.shift();
            demo.push(curr.val)
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        res.push(demo)
    }
    return res;
};