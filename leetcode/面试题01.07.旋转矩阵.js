"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
面试题 01.07. 旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？



示例 1:

给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

注意：本题与主站 48 题相同：https://leetcode-cn.com/problems/rotate-image/
* */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
    // 要保证所有 值都 交换 那么 应该交换了 约4分之1 的值(n 为奇数  除了中心有值不用交换的)
    // 4x4 那么 遍历 2x2
    // 5x5 => 2x3 或者 3x2
    // 7x7 => 4x3 或者 3x4
    for (let i = 0; i < n / 2; i++) {
        const j_limit = (n & 1) === 1 ? n - n / 2 - 1 : n / 2;
        for (let j = 0; j < j_limit; j++) {
            // console.log(i, j);
            // 使用解构 可以不用 临时变量
            [
                matrix[i][j],
                matrix[n - j - 1][i],
                matrix[n - i - 1][n - j - 1],
                matrix[j][n - i - 1],
            ] = [
                matrix[n - j - 1][i],
                matrix[n - i - 1][n - j - 1],
                matrix[j][n - i - 1],
                matrix[i][j],
            ];
        }
    }
    return matrix;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
]), [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
]);
assert_1.default.deepStrictEqual(rotate([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]), [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
]);
assert_1.default.deepStrictEqual(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]), [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6Z2i6K+V6aKYMDEuMDcu5peL6L2s55+p6Zi1LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS/pnaLor5XpopgwMS4wNy7ml4vovaznn6npmLUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMENJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBVSxNQUFrQjtJQUN2QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3hCLG9EQUFvRDtJQUNwRCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakI7Z0JBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckIsR0FBRztnQkFDRixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsTUFBTSxDQUFDO0lBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDakIsQ0FBQyxFQUNGO0lBQ0UsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDaEIsQ0FDRixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLE1BQU0sQ0FBQztJQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztDQUNyQixDQUFDLEVBQ0Y7SUFDRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ3BCLENBQ0YsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixNQUFNLENBQUM7SUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLEVBQ0Y7SUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6Z2i6K+V6aKYIDAxLjA3LiDml4vovaznn6npmLVcbue7meS9oOS4gOW5heeUsSBOIMOXIE4g55+p6Zi16KGo56S655qE5Zu+5YOP77yM5YW25Lit5q+P5Liq5YOP57Sg55qE5aSn5bCP5Li6IDQg5a2X6IqC44CC6K+35L2g6K6+6K6h5LiA56eN566X5rOV77yM5bCG5Zu+5YOP5peL6L2sIDkwIOW6puOAglxuXG7kuI3ljaDnlKjpop3lpJblhoXlrZjnqbrpl7Tog73lkKblgZrliLDvvJ9cblxuXG5cbuekuuS+iyAxOlxuXG7nu5nlrpogbWF0cml4ID1cbltcbiAgWzEsMiwzXSxcbiAgWzQsNSw2XSxcbiAgWzcsOCw5XVxuXSxcblxu5Y6f5Zyw5peL6L2s6L6T5YWl55+p6Zi177yM5L2/5YW25Y+Y5Li6OlxuW1xuICBbNyw0LDFdLFxuICBbOCw1LDJdLFxuICBbOSw2LDNdXG5dXG7npLrkvosgMjpcblxu57uZ5a6aIG1hdHJpeCA9XG5bXG4gIFsgNSwgMSwgOSwxMV0sXG4gIFsgMiwgNCwgOCwxMF0sXG4gIFsxMywgMywgNiwgN10sXG4gIFsxNSwxNCwxMiwxNl1cbl0sXG5cbuWOn+WcsOaXi+i9rOi+k+WFpeefqemYte+8jOS9v+WFtuWPmOS4ujpcbltcbiAgWzE1LDEzLCAyLCA1XSxcbiAgWzE0LCAzLCA0LCAxXSxcbiAgWzEyLCA2LCA4LCA5XSxcbiAgWzE2LCA3LDEwLDExXVxuXVxuXG7ms6jmhI/vvJrmnKzpopjkuI7kuLvnq5kgNDgg6aKY55u45ZCM77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcm90YXRlLWltYWdlL1xuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdW119IG1hdHJpeFxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IG1hdHJpeCBpbi1wbGFjZSBpbnN0ZWFkLlxuICovXG52YXIgcm90YXRlID0gZnVuY3Rpb24gKG1hdHJpeDogbnVtYmVyW11bXSkge1xuICBjb25zdCBuID0gbWF0cml4Lmxlbmd0aDtcbiAgLy8g6KaB5L+d6K+B5omA5pyJIOWAvOmDvSDkuqTmjaIg6YKj5LmIIOW6lOivpeS6pOaNouS6hiDnuqY05YiG5LmLMSDnmoTlgLwobiDkuLrlpYfmlbAgIOmZpOS6huS4reW/g+acieWAvOS4jeeUqOS6pOaNoueahClcbiAgLy8gNHg0IOmCo+S5iCDpgY3ljoYgMngyXG4gIC8vIDV4NSA9PiAyeDMg5oiW6ICFIDN4MlxuICAvLyA3eDcgPT4gNHgzIOaIluiAhSAzeDRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC8gMjsgaSsrKSB7XG4gICAgY29uc3Qgal9saW1pdCA9IChuICYgMSkgPT09IDEgPyBuIC0gbiAvIDIgLSAxIDogbiAvIDI7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGpfbGltaXQ7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2coaSwgaik7XG4gICAgICAvLyDkvb/nlKjop6PmnoQg5Y+v5Lul5LiN55SoIOS4tOaXtuWPmOmHj1xuICAgICAgW1xuICAgICAgICBtYXRyaXhbaV1bal0sXG4gICAgICAgIG1hdHJpeFtuIC0gaiAtIDFdW2ldLFxuICAgICAgICBtYXRyaXhbbiAtIGkgLSAxXVtuIC0gaiAtIDFdLFxuICAgICAgICBtYXRyaXhbal1bbiAtIGkgLSAxXSxcbiAgICAgIF0gPSBbXG4gICAgICAgIG1hdHJpeFtuIC0gaiAtIDFdW2ldLFxuICAgICAgICBtYXRyaXhbbiAtIGkgLSAxXVtuIC0gaiAtIDFdLFxuICAgICAgICBtYXRyaXhbal1bbiAtIGkgLSAxXSxcbiAgICAgICAgbWF0cml4W2ldW2pdLFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0cml4O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIHJvdGF0ZShbXG4gICAgWzUsIDEsIDksIDExXSxcbiAgICBbMiwgNCwgOCwgMTBdLFxuICAgIFsxMywgMywgNiwgN10sXG4gICAgWzE1LCAxNCwgMTIsIDE2XSxcbiAgXSksXG4gIFtcbiAgICBbMTUsIDEzLCAyLCA1XSxcbiAgICBbMTQsIDMsIDQsIDFdLFxuICAgIFsxMiwgNiwgOCwgOV0sXG4gICAgWzE2LCA3LCAxMCwgMTFdLFxuICBdXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByb3RhdGUoW1xuICAgIFsxLCAyLCAzLCA0LCA1XSxcbiAgICBbNiwgNywgOCwgOSwgMTBdLFxuICAgIFsxMSwgMTIsIDEzLCAxNCwgMTVdLFxuICAgIFsxNiwgMTcsIDE4LCAxOSwgMjBdLFxuICAgIFsyMSwgMjIsIDIzLCAyNCwgMjVdLFxuICBdKSxcbiAgW1xuICAgIFsyMSwgMTYsIDExLCA2LCAxXSxcbiAgICBbMjIsIDE3LCAxMiwgNywgMl0sXG4gICAgWzIzLCAxOCwgMTMsIDgsIDNdLFxuICAgIFsyNCwgMTksIDE0LCA5LCA0XSxcbiAgICBbMjUsIDIwLCAxNSwgMTAsIDVdLFxuICBdXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICByb3RhdGUoW1xuICAgIFsxLCAyLCAzXSxcbiAgICBbNCwgNSwgNl0sXG4gICAgWzcsIDgsIDldLFxuICBdKSxcbiAgW1xuICAgIFs3LCA0LCAxXSxcbiAgICBbOCwgNSwgMl0sXG4gICAgWzksIDYsIDNdLFxuICBdXG4pO1xuIl19