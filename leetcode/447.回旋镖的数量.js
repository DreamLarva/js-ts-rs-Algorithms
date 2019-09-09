"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，
其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例:

输入:
[[0,0],[1,0],[2,0]]

输出:
2

解释:
两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-boomerangs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        const map = {};
        for (let j = 0; j < points.length; j++) {
            if (i === j)
                continue;
            const distance = Math.abs((points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2);
            map[distance] = map[distance] == null ? 1 : map[distance] + 1;
        }
        result += Object.values(map).reduce((sum, cur) => {
            return sum + cur * (cur - 1);
        }, 0);
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]), 2);
assert_1.default.strictEqual(numberOfBoomerangs([[0, 0], [1, 0], [2, 0], [-1, 0]]), 4);
assert_1.default.strictEqual(numberOfBoomerangs([[0, 0], [1, 0], [2, 0], [3, 1], [4, 1], [0, 1]]), 6);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ3LuWbnuaXi+mVlueahOaVsOmHjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDQ3LuWbnuaXi+mVlueahOaVsOmHjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKOzs7R0FHRztBQUNILElBQUksa0JBQWtCLEdBQUcsVUFBVSxNQUFrQjtJQUNqRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsU0FBUztZQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdDLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUdELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNyRCxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNwRSxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuW5s+mdouS4isKgbiDlr7nkuI3lkIznmoTngrnvvIzigJzlm57ml4vplZbigJ0g5piv55Sx54K56KGo56S655qE5YWD57uEwqAoaSwgaiwgaynCoO+8jFxyXG7lhbbkuK3CoGnCoOWSjMKgasKg5LmL6Ze055qE6Led56a75ZKMwqBpwqDlkozCoGvCoOS5i+mXtOeahOi3neemu+ebuOetie+8iOmcgOimgeiAg+iZkeWFg+e7hOeahOmhuuW6j++8ieOAglxyXG5cclxu5om+5Yiw5omA5pyJ5Zue5peL6ZWW55qE5pWw6YeP44CC5L2g5Y+v5Lul5YGH6K6+wqBuIOacgOWkp+S4uiA1MDDvvIzmiYDmnInngrnnmoTlnZDmoIflnKjpl63ljLrpl7QgWy0xMDAwMCwgMTAwMDBdIOS4reOAglxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOlxyXG5bWzAsMF0sWzEsMF0sWzIsMF1dXHJcblxyXG7ovpPlh7o6XHJcbjJcclxuXHJcbuino+mHijpcclxu5Lik5Liq5Zue5peL6ZWW5Li6IFtbMSwwXSxbMCwwXSxbMiwwXV0g5ZKMIFtbMSwwXSxbMiwwXSxbMCwwXV1cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL251bWJlci1vZi1ib29tZXJhbmdzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdW119IHBvaW50c1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgbnVtYmVyT2ZCb29tZXJhbmdzID0gZnVuY3Rpb24gKHBvaW50czogbnVtYmVyW11bXSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBqKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicygocG9pbnRzW2ldWzBdIC0gcG9pbnRzW2pdWzBdKSAqKiAyICsgKHBvaW50c1tpXVsxXSAtIHBvaW50c1tqXVsxXSkgKiogMik7XHJcbiAgICAgICAgICAgIG1hcFtkaXN0YW5jZV0gPSBtYXBbZGlzdGFuY2VdID09IG51bGwgPyAxIDogbWFwW2Rpc3RhbmNlXSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQgKz0gT2JqZWN0LnZhbHVlcyhtYXApLnJlZHVjZSgoc3VtLCBjdXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bSArIGN1ciAqIChjdXIgLSAxKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIG51bWJlck9mQm9vbWVyYW5ncyhbWzAsIDBdLCBbMSwgMF0sIFsyLCAwXV0pLFxyXG4gICAgMixcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbnVtYmVyT2ZCb29tZXJhbmdzKFtbMCwgMF0sIFsxLCAwXSwgWzIsIDBdLCBbLTEsIDBdXSksXHJcbiAgICA0LFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBudW1iZXJPZkJvb21lcmFuZ3MoW1swLCAwXSwgWzEsIDBdLCBbMiwgMF0sIFszLCAxXSwgWzQsIDFdLCBbMCwgMV1dKSxcclxuICAgIDYsXHJcbik7XHJcbiJdfQ==