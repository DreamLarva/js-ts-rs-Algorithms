/*
给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
下面是两个重复的子树：

      2
     /
    4
和

    4
因此，你需要以列表的形式返回上述重复子树的根结点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-duplicate-subtrees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import {createBinaryTree, TreeNode} from '../util/BinaryTree';
import assert from "assert";

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root: null | TreeNode<number>) {
    if (root == null) return [];
    // 从子节点 向父节点递归 然后在哈希表中 记录每个子树的值
    // 能用的遍历方法 只有 中序遍历 和 后续遍历
    const map: { [key: string]: number } = {};
    const result: TreeNode[] = [];
    // 由于 root 百分百 不可能和其他子树 相同 直接略过
    step(root.left);
    step(root.right);

    return result;

    function step(node: TreeNode<number> | null): string {
        if (node == null) return '';
        let {left, right} = node;
        // if (left == null && right == null) {
        //     if (map[String(node.val)] == null) {
        //         map[String(node.val)] = 0;
        //     } else if (map[String(node.val)] == 1) {
        //         result.push(node);
        //     }
        //     map[String(node.val)]++;
        //     return String(node.val);
        // }
        /**
         * wcnm 为什么 不能像注释的这行写呢 不知道?(想不出案例) 但是在166 个测试的时候出错
         * 但是 按照现在的写法 就是堆的写法 一定是正确的
         * */
            // const newHash = step(left) + "<" + node.val + '>' + step(right);
        const newHash = node.val + ',' + step(left) + ',' + step(right);

        if (map[newHash] == null) {
            map[newHash] = 0;
        } else if (map[newHash] == 1) {
            result.push(node);
        }
        map[newHash]++;
        return newHash;
    }
};


assert.deepStrictEqual(
    findDuplicateSubtrees(createBinaryTree([1, 2, 3, 4, null, 2, 4, null, null, 4])),
    [
        createBinaryTree([4]),
        createBinaryTree([2, 4]),
    ],
);
assert.deepStrictEqual(
    findDuplicateSubtrees(createBinaryTree([2, 1, 1])),
    [
        createBinaryTree([1]),
    ],
);

assert.deepStrictEqual(
    findDuplicateSubtrees(createBinaryTree([0, 0, 0, 0, null, null, 0, null, null, null, 0])),
    [
        createBinaryTree([0]),
    ],
);

assert.deepStrictEqual(
    findDuplicateSubtrees(createBinaryTree([0, 0, 0, 0, null, null, 0, null, null, 0, 0])),
    [
        createBinaryTree([0]),
    ],
);

const sample = [94, 93, 95, 92, 94, 96, 94, 93, 93, 93, 95, 97, 97, 95, 95, 92, 94, 94, 94, 92, 94, 94, 96, 98, 98, 96, 98, 96, 94, 94, 96, 91, 91, 93, 95, 93, 95, 95, 95, 91, 93, 93, 95, 95, 93, 97, 97, 97, 97, 97, 99, 95, 97, 97, 99, 95, 97, 93, 95, null, 95, 95, 95, 90, 92, 90, 92, 92, 94, 94, 96, 94, null, 96, 94, 94, 94, 96, null, 90, 92, null, null, 94, null, 94, 96, null, null, null, null, 96, null, null, null, 96, 98, 96, 96, 96, 96, 100, 100, 94, 94, 98, 96, 96, 96, 98, 100, 94, 96, 98, 98, 94, 94, 94, 96, null, null, 94, 96, 94, 94, 89, 91, null, 93, 91, 91, 91, 91, null, 91, null, null, null, null, null, null, 93, 95, 95, 95, 93, 95, null, null, 95, 93, null, null, null, null, null, 93, null, 95, 93, 95, null, 97, 95, 97, 95, 95, 97, 99, 97, 97, null, 97, 95, null, 95, 97, 101, 101, 99, 99, 95, null, 93, null, 97, 99, 95, 97, 97, 97, 95, 95, 99, 97, 101, 99, 93, 93, 95, 97, 97, 99, 99, null, null, null, null, 95, 95, 95, 97, 95, null, null, 95, null, null, 95, null, null, 88, 88, 92, null, null, 94, 90, 92, 92, 92, 90, 90, 90, 92, 90, 92, null, null, null, 94, 94, 96, null, null, null, 94, null, null, null, null, 94, null, null, null, 94, null, null, null, 96, null, 96, 96, 94, 94, null, null, null, 96, 96, 94, 96, 96, 100, 100, 96, 98, 96, 96, null, 96, 94, null, 94, 96, null, null, 100, 102, 100, null, null, 100, 98, 98, 94, 96, 92, 94, 96, 98, 98, 98, 94, 94, 96, 98, 96, 98, 96, 98, null, 96, 96, 94, 98, 98, 96, 98, 100, 102, 98, null, 92, 94, 92, 94, 96, null, null, null, 96, 98, 98, 100, 100, 100, 94, 96, 94, null, null, 96, 96, 98, null, null, null, null, 96, 94, null, null, 87, 89, 91, null, null, null, 89, 89, null, 91, 93, 93, null, 93, 89, 91, 89, 91, 91, 89, 93, null, 91, null, null, null, null, 93, null, null, null, null, null, null, null, null, null, null, null, null, null, 95, 97, null, 95, null, null, 95, 95, 97, 95, 97, 95, null, 95, 95, 97, 97, 101, 101, 101, 101, 95, 95, 97, 99, 95, null, 95, 97, 97, null, 95, null, 93, 95, null, null, null, null, 101, 103, 99, null, null, 101, null, null, null, null, null, 93, 97, 97, null, 91, null, 95, 97, 97, 97, null, 97, null, 97, 99, 95, 95, 93, null, null, 97, 97, null, 95, null, null, 99, 95, 97, 97, 99, 95, 97, 95, 97, 93, 95, 99, 97, 97, 99, 95, 97, 97, 99, 99, 99, 101, 101, null, 99, 91, null, null, null, null, null, null, 93, null, 97, 95, 95, 97, null, 97, 97, 101, 99, null, 99, 99, null, null, null, 97, 97, null, null, null, null, 97, 97, null, null, null, 95, null, null, null, null, null, null, null, null, null, null, null, null, 92, null, null, null, null, null, null, 94, 88, null, null, null, 90, 90, null, null, null, null, 88, 88, null, null, null, 90, null, null, null, null, null, null, null, null, 96, 96, 96, 96, 96, 96, 96, 94, null, null, 96, 96, 94, null, 94, 96, 96, null, 98, 96, 100, 102, null, null, 102, 102, null, 100, 94, 96, 94, null, 96, 98, 98, null, 94, 96, 96, null, 98, null, null, null, 96, 94, null, null, null, 94, null, null, null, 104, null, 100, null, 102, null, null, 96, 96, 96, 96, null, 92, null, 96, null, 96, null, null, 96, null, null, null, null, null, 98, null, null, null, 94, 94, null, null, null, 98, null, 96, null, null, 100, null, 96, 96, 96, 98, 96, 98, 98, 100, 94, null, null, null, null, null, null, 98, 94, 92, 96, 96, null, 100, 96, null, 98, null, 98, 100, 94, 94, 96, 98, null, 96, 98, 100, 98, 98, 100, 100, 102, 100, 100, null, null, null, null, 92, 92, null, null, null, 96, 94, null, 96, 98, 98, 96, 98, 96, null, 102, null, 98, null, null, null, 100, 100, null, null, null, null, 96, 98, 96, 98, null, 94, null, null, 95, null, 87, null, null, 91, 91, 91, 87, null, null, 89, 91, null, null, null, null, null, null, null, null, null, 97, 95, 95, 97, null, null, null, null, 97, 95, null, null, 93, null, 95, 93, null, null, 95, null, 97, 99, 95, 95, 99, null, null, 103, 101, null, null, 103, null, 99, 95, 95, null, 95, 95, 93, null, 97, null, null, null, null, 93, 95, 95, 97, null, null, null, null, 97, null, null, null, null, null, null, null, 101, null, 101, 103, 97, 97, 95, null, null, null, null, 97, null, null, 95, null, null, null, null, 97, null, null, 93, 93, null, null, 97, null, null, null, 99, null, 95, 95, null, null, 97, 95, null, null, 95, null, 97, null, 97, 99, 99, null, null, null, null, 99, 93, 95, 91, 93, 97, 97, 95, 95, 101, 99, null, null, null, null, 99, null, null, null, 93, null, 93, 95, 97, 95, 97, 99, 95, 95, 97, 99, 99, 101, 97, null, null, 99, 99, 99, null, null, 103, 103, 101, 101, null, 101, null, 93, null, 91, null, 95, null, 95, null, 97, 99, 99, 97, 99, 97, 97, 97, null, 95, 95, null, null, null, 97, 101, 99, 99, 101, null, null, null, null, 95, null, null, null, 93, null, null, null, null, 88, null, null, null, null, null, null, null, null, 88, null, 90, 92, null, null, 94, 96, null, null, 96, 96, 98, null, 96, 96, null, null, 94, 96, 92, null, 94, null, 96, 98, 100, 100, null, 96, 94, null, null, null, 102, null, null, null, null, 102, null, null, 94, 94, 94, 96, null, 96, null, null, 92, 94, 96, null, 94, null, 94, 94, null, 96, null, 98, null, null, null, 100, 100, 102, null, null, 98, null, 96, 98, null, null, null, null, null, null, null, null, 94, 94, null, 94, null, null, null, null, 94, 96, 96, 96, 96, 96, null, 96, null, null, 96, 96, 98, 98, null, 100, 98, 100, null, null, null, 94, 94, 96, 92, 92, 92, 94, null, 98, null, 98, 94, 96, 94, 96, null, null, null, 100, null, null, 92, null, 92, 94, null, 96, 98, 96, 96, null, 98, 98, 98, null, 96, null, 96, 96, null, null, null, 100, 98, null, null, 100, 96, 98, null, null, 98, 98, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 96, 96, 98, null, null, 100, 100, 96, 98, 100, 98, null, null, 96, 98, 98, 98, 96, null, 94, null, null, null, null, 100, 98, null, 100, null, null, 102, null, null, null, null, null, null, 87, null, null, null, null, null, 95, 95, null, 97, null, null, null, 97, 97, null, 95, 97, 95, 97, 95, null, null, null, null, null, null, null, 95, null, null, null, null, null, null, 101, 97, null, 93, null, null, null, null, 103, null, null, 95, null, 95, 93, 95, 95, 95, null, null, 93, null, 93, null, null, null, null, 95, 95, null, null, 95, 97, 97, 99, null, null, null, null, 103, null, null, null, 95, 95, 99, null, 93, null, null, null, null, null, 93, 95, 97, 95, 95, 97, null, 97, 97, null, 95, null, null, null, null, null, 95, 97, 99, 97, 97, 99, null, null, 99, 97, 101, null, 95, null, null, 93, 97, 97, 91, 93, 91, 93, 93, 91, 93, 93, null, null, 99, 97, 93, 93, 95, 97, 93, null, null, 95, null, null, null, 93, 91, 93, 95, 95, 95, 97, null, null, null, null, null, null, 99, null, null, null, null, null, 97, null, 95, null, null, null, null, null, 99, null, null, null, 95, 95, null, 97, 97, null, 99, 99, 95, null, null, null, null, null, null, 101, 99, null, 95, 95, null, null, null, null, 97, 99, null, 95, 99, null, 97, null, null, null, 97, null, null, null, 101, null, 99, null, null, null, 103, null, null, null, null, null, 94, 94, null, null, null, null, null, 98, 94, 94, null, null, null, null, 96, null, 96, null, null, 96, null, 102, null, 98, null, null, null, null, null, null, null, null, 94, 94, null, 94, 96, 94, null, null, null, null, null, null, null, 94, 94, null, null, null, null, null, null, null, null, 100, null, null, 96, 94, null, 96, null, null, null, null, 94, null, null, null, null, 96, null, null, 94, null, null, 96, null, null, 96, null, null, null, null, null, 96, null, null, null, 96, 96, null, 98, null, null, 98, null, null, null, null, 102, null, null, 92, 94, 96, null, 96, 96, null, 90, null, null, 92, 92, null, 92, 92, null, null, 92, null, 92, 94, 92, null, 100, 96, null, 94, null, null, 94, 96, null, 98, null, 92, 94, 94, 96, null, null, 92, 90, null, null, 94, null, 94, 96, 94, 96, 98, 96, null, null, null, null, 94, 96, null, null, 94, null, 94, 94, null, null, null, 98, 98, null, null, 100, null, null, null, 102, null, null, 96, null, null, 96, null, null, null, null, 96, null, 100, null, null, null, null, null, null, 102, null, null, 104, 104, null, null, null, null, null, 97, null, 95, 95, null, 95, 97, null, null, 95, null, null, 103, null, 97, 95, 95, null, null, 93, 93, null, null, null, 95, null, null, null, 93, null, null, 97, null, 93, null, null, null, null, null, 95, null, null, null, null, null, null, null, 95, 97, 95, null, 95, null, 97, 99, null, null, null, null, 91, 93, null, 95, null, null, null, 97, 95, null, 89, null, null, 91, null, null, null, null, null, null, null, null, 91, null, 93, 95, 93, 91, null, null, 95, null, 93, null, 95, null, null, null, null, null, null, 93, null, null, null, 95, null, null, null, null, 89, null, null, 95, null, null, 95, null, 95, 93, null, null, null, 97, 95, null, null, null, 95, null, null, null, null, 95, null, 95, 99, null, 97, null, null, null, null, 103, 95, null, 95, null, null, 97, null, null, null, null, null, null, null, null, null, null, null, 96, 94, null, null, null, 98, null, null, null, 104, null, null, null, null, null, null, null, null, null, 94, 94, null, null, null, 94, null, 98, 94, null, null, 96, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 94, null, null, null, null, null, null, null, null, null, 92, null, null, null, null, 94, null, 94, null, 92, null, 94, 92, 94, 94, 96, 94, 92, null, null, null, null, 94, 94, null, null, 96, null, 92, null, 96, null, null, null, null, null, null, null, 94, null, null, null, 96, null, null, 102, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 93, null, 93, null, null, null, 99, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 91, null, null, null, 91, null, null, null, null, null, 97, null, null, null, 91, null, 95, null, null, null, null, null, null, null, 97, null, null, null, null, 101, null, 94, null, null, null, null, null, null, 92, null, null, null, 96, null, null, 94, null, null, 96, null, null, 93, null, null, null, null, null, null, null, 97];
const answer = [[93, null, 94], [93, 94], [95, 96, null, null, 97], [95, 94, 96], [96], [92, null, 93], [94, null, 95, 94], [96, null, 95], [96, 97], [95, 96], [97], [88], [94], [94, null, 93], [92, null, 91, null, 92], [92], [94, 95], [88, 87], [94, null, 95, null, 96, 95], [98, 97], [87], [89], [91], [91, 92], [93], [93, null, 94, 95], [98, null, 99], [95, 96, 96], [95, 94, null, 93], [101], [97, 96], [97, 96, 96, null, null, null, 97], [93, 92], [99], [94, 93], [100, 99], [102, 101], [100, null, 99], [99, 98], [95, 96, null, 97], [99, null, 100], [99, 98, null, 99], [101, null, 100], [90], [96, null, 97], [98, 99], [96, 95, 97], [98, 97, 99, null, null, null, 100], [95], [96, 95, 97, 96, null, 98], [98, 97, 99], [97, null, 98, null, 97], [95, null, 96, 95], [103], [97, 96, 98], [100], [102], [95, 94, 96, null, null, 95], [97, null, 98, 99], [101, null, 102], [98, null, 97], [96, 95], [94, 93, 95, null, null, null, 94], [100, 101, null, null, 102], [98], [104], [99, 100], [94, null, 95], [90, 89], [92, null, 91], [96, null, 97, null, 96, 97], [91, null, 92], [97, null, 96], [95, null, 96], [95, 94], [97, 98], [97, null, 96, 97], [95, null, 94]];
assert.deepStrictEqual(
    findDuplicateSubtrees(createBinaryTree(sample)).map(v => v.levelTraversal()).map(v => v.toString()).sort(),
    answer.map(v => v.filter(v => v != null).toString()).sort(),
);
