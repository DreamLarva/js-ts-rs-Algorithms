"use strict";
/*
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null)
        return root;
    const { left, right } = root;
    if (left || root) {
        root.left = invertTree(right);
        root.right = invertTree(left);
    }
    return root;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI2Lue/u+i9rOS6jOWPieagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI2Lue/u+i9rOS6jOWPieagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJOztBQUlKOzs7R0FHRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsSUFBcUI7SUFDNUMsSUFBSSxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQy9CLE1BQU0sRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue/u+i9rOS4gOajteS6jOWPieagkeOAglxuXG7npLrkvovvvJpcblxu6L6T5YWl77yaXG5cbiAgICAgNFxuICAgLyAgIFxcXG4gIDIgICAgIDdcbiAvIFxcICAgLyBcXFxuMSAgIDMgNiAgIDlcbui+k+WHuu+8mlxuXG4gICAgIDRcbiAgIC8gICBcXFxuICA3ICAgICAyXG4gLyBcXCAgIC8gXFxcbjkgICA2IDMgICAxXG7lpIfms6g6XG7ov5nkuKrpl67popjmmK/lj5fliLAgTWF4IEhvd2VsbCDnmoQg5Y6f6Zeu6aKYIOWQr+WPkeeahCDvvJpcblxu6LC35q2M77ya5oiR5LusOTDvvIXnmoTlt6XnqIvluIjkvb/nlKjmgqjnvJblhpnnmoTova/ku7YoSG9tZWJyZXcp77yM5L2G5piv5oKo5Y205peg5rOV5Zyo6Z2i6K+V5pe25Zyo55m95p2/5LiK5YaZ5Ye657+76L2s5LqM5Y+J5qCR6L+Z6YGT6aKY77yM6L+Z5aSq57Of57OV5LqG44CCXG4qICovXG5cbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gXCIuLi91dGlsL0JpbmFyeVRyZWVcIjtcblxuLyoqXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSByb290XG4gKiBAcmV0dXJuIHtUcmVlTm9kZX1cbiAqL1xudmFyIGludmVydFRyZWUgPSBmdW5jdGlvbiAocm9vdDogVHJlZU5vZGUgfCBudWxsKSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiByb290O1xuICAgIGNvbnN0IHtsZWZ0LCByaWdodH0gPSByb290O1xuICAgIGlmIChsZWZ0IHx8IHJvb3QpIHtcbiAgICAgICAgcm9vdC5sZWZ0ID0gaW52ZXJ0VHJlZShyaWdodCk7XG4gICAgICAgIHJvb3QucmlnaHQgPSBpbnZlcnRUcmVlKGxlZnQpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCB7fVxuIl19