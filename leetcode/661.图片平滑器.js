"use strict";
/*
661. 图片平滑器
包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

示例 1:

输入:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
输出:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
注意:

给定矩阵中的整数范围为 [0, 255]。
矩阵的长和宽的范围均为 [1, 150]。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function imageSmoother(M) {
    const result = Array(M.length)
        .fill(0)
        .map(() => []);
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[i].length; j++) {
            let count = 0; // 记录非0数值的个数
            let total = 0; // 记录自己和周围8格的总和
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    const grid = M?.[i + k]?.[j + l];
                    if (grid == null)
                        continue;
                    count++;
                    total += grid;
                }
            }
            result[i][j] = Math.floor(total / count);
        }
    }
    return result;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]), [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYxLuWbvueJh+W5s+a7keWZqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjYxLuWbvueJh+W5s+a7keWZqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7Ozs7O0FBRUosU0FBUyxhQUFhLENBQUMsQ0FBYTtJQUNsQyxNQUFNLE1BQU0sR0FBZSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ1AsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLElBQUksSUFBSSxJQUFJO3dCQUFFLFNBQVM7b0JBRTNCLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssSUFBSSxJQUFJLENBQUM7aUJBQ2Y7YUFDRjtZQUVELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMxQztLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsYUFBYSxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FBQyxFQUNGO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjY2MS4g5Zu+54mH5bmz5ruR5ZmoXG7ljIXlkKvmlbTmlbDnmoTkuoznu7Tnn6npmLUgTSDooajnpLrkuIDkuKrlm77niYfnmoTngbDluqbjgILkvaDpnIDopoHorr7orqHkuIDkuKrlubPmu5HlmajmnaXorqnmr4/kuIDkuKrljZXlhYPnmoTngbDluqbmiJDkuLrlubPlnYfngbDluqYgKOWQkeS4i+iIjeWFpSkg77yM5bmz5Z2H54Gw5bqm55qE6K6h566X5piv5ZGo5Zu055qEOOS4quWNleWFg+WSjOWug+acrOi6q+eahOWAvOaxguW5s+Wdh++8jOWmguaenOWRqOWbtOeahOWNleWFg+agvOS4jei2s+WFq+S4qu+8jOWImeWwveWPr+iDveWkmueahOWIqeeUqOWug+S7rOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOlxuW1sxLDEsMV0sXG4gWzEsMCwxXSxcbiBbMSwxLDFdXVxu6L6T5Ye6OlxuW1swLCAwLCAwXSxcbiBbMCwgMCwgMF0sXG4gWzAsIDAsIDBdXVxu6Kej6YeKOlxu5a+55LqO54K5ICgwLDApLCAoMCwyKSwgKDIsMCksICgyLDIpOiDlubPlnYcoMy80KSA9IOW5s+WdhygwLjc1KSA9IDBcbuWvueS6jueCuSAoMCwxKSwgKDEsMCksICgxLDIpLCAoMiwxKTog5bmz5Z2HKDUvNikgPSDlubPlnYcoMC44MzMzMzMzMykgPSAwXG7lr7nkuo7ngrkgKDEsMSk6IOW5s+Wdhyg4LzkpID0g5bmz5Z2HKDAuODg4ODg4ODkpID0gMFxu5rOo5oSPOlxuXG7nu5nlrprnn6npmLXkuK3nmoTmlbTmlbDojIPlm7TkuLogWzAsIDI1NV3jgIJcbuefqemYteeahOmVv+WSjOWuveeahOiMg+WbtOWdh+S4uiBbMSwgMTUwXeOAglxuKiAqL1xuXG5mdW5jdGlvbiBpbWFnZVNtb290aGVyKE06IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXVtdID0gQXJyYXkoTS5sZW5ndGgpXG4gICAgLmZpbGwoMClcbiAgICAubWFwKCgpID0+IFtdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBNLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBNW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgY291bnQgPSAwOyAvLyDorrDlvZXpnZ4w5pWw5YC855qE5Liq5pWwXG4gICAgICBsZXQgdG90YWwgPSAwOyAvLyDorrDlvZXoh6rlt7Hlkozlkajlm7Q45qC855qE5oC75ZKMXG5cbiAgICAgIGZvciAobGV0IGsgPSAtMTsgayA8PSAxOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgbCA9IC0xOyBsIDw9IDE7IGwrKykge1xuICAgICAgICAgIGNvbnN0IGdyaWQgPSBNPy5baSArIGtdPy5baiArIGxdO1xuICAgICAgICAgIGlmIChncmlkID09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB0b3RhbCArPSBncmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtpXVtqXSA9IE1hdGguZmxvb3IodG90YWwgLyBjb3VudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgaW1hZ2VTbW9vdGhlcihbXG4gICAgWzEsIDEsIDFdLFxuICAgIFsxLCAwLCAxXSxcbiAgICBbMSwgMSwgMV0sXG4gIF0pLFxuICBbXG4gICAgWzAsIDAsIDBdLFxuICAgIFswLCAwLCAwXSxcbiAgICBbMCwgMCwgMF0sXG4gIF1cbik7XG4iXX0=