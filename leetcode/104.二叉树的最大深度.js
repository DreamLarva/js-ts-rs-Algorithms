"use strict";
/*
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
*/
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    val;
    left = null;
    right = null;
    constructor(val) {
        this.val = val;
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root === null
        ? 0
        : Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA0LuS6jOWPieagkeeahOacgOWkp+a3seW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTA0LuS6jOWPieagkeeahOacgOWkp+a3seW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsTUFBTSxRQUFRO0lBQ1osR0FBRyxDQUFJO0lBQ1AsSUFBSSxHQUF1QixJQUFJLENBQUM7SUFDaEMsS0FBSyxHQUF1QixJQUFJLENBQUM7SUFFakMsWUFBWSxHQUFNO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILElBQUksUUFBUSxHQUFHLFVBQVUsSUFBMEI7SUFDakQsT0FBTyxJQUFJLEtBQUssSUFBSTtRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quS6jOWPieagke+8jOaJvuWHuuWFtuacgOWkp+a3seW6puOAglxuXG7kuozlj4nmoJHnmoTmt7HluqbkuLrmoLnoioLngrnliLDmnIDov5zlj7blrZDoioLngrnnmoTmnIDplb/ot6/lvoTkuIrnmoToioLngrnmlbDjgIJcblxu6K+05piOOiDlj7blrZDoioLngrnmmK/mjIfmsqHmnInlrZDoioLngrnnmoToioLngrnjgIJcblxu56S65L6L77yaXG7nu5nlrprkuozlj4nmoJEgWzMsOSwyMCxudWxsLG51bGwsMTUsN13vvIxcblxuICAgIDNcbiAgIC8gXFxcbiAgOSAgMjBcbiAgICAvICBcXFxuICAgMTUgICA3XG7ov5Tlm57lroPnmoTmnIDlpKfmt7HluqYgMyDjgIJcbiovXG5cbmNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgdmFsOiBUO1xuICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG1heERlcHRoID0gZnVuY3Rpb24gKHJvb3Q6IFRyZWVOb2RlPGFueT4gfCBudWxsKTogbnVtYmVyIHtcbiAgcmV0dXJuIHJvb3QgPT09IG51bGxcbiAgICA/IDBcbiAgICA6IE1hdGgubWF4KG1heERlcHRoKHJvb3QubGVmdCkgKyAxLCBtYXhEZXB0aChyb290LnJpZ2h0KSArIDEpO1xufTtcblxuZXhwb3J0IHt9O1xuIl19