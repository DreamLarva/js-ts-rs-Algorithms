"use strict";
/*
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。


上图是一个部分填充的有效的数独。

数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:

输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
示例 2:

输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
说明:

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
给定数独序列只包含数字 1-9 和字符 '.' 。
给定数独永远是 9x9 形式的。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isValidSudoku = function (board) {
    // 存储每列的结果
    const columns = Array(9).fill(0).map(() => []);
    // 存储每行的结果
    const rows = Array(9).fill(0).map(() => []);
    // 存储每块的结果
    const blocks = Array(9).fill(0).map(() => []);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num === '.')
                continue;
            const num_element = parseInt(num);
            const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            // 老样子 哈希表 判断重复
            rows[i][num_element] = (rows[i][num_element] || 0) + 1;
            columns[j][num_element] = (columns[j][num_element] || 0) + 1;
            blocks[box_index][num_element] = (blocks[box_index][num_element] || 0) + 1;
            if (rows[i][num_element] > 1 || columns[j][num_element] > 1 || blocks[box_index][num_element] > 1)
                return false;
        }
    }
    return true;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]), true);
assert_1.default.strictEqual(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYu5pyJ5pWI55qE5pWw54usLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNi7mnInmlYjnmoTmlbDni6wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtESTs7Ozs7QUFPSixJQUFJLGFBQWEsR0FBRyxVQUFVLEtBQXdCO0lBRWxELFVBQVU7SUFDVixNQUFNLE9BQU8sR0FBZSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRCxVQUFVO0lBQ1YsTUFBTSxJQUFJLEdBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEQsVUFBVTtJQUNWLE1BQU0sTUFBTSxHQUFlLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLEdBQUcsS0FBSyxHQUFHO2dCQUFFLFNBQVM7WUFDMUIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxlQUFlO1lBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFM0UsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQzdGLE9BQU8sS0FBSyxDQUFDO1NBQ3BCO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUNUO0lBQ0ksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEQsQ0FDSixFQUNELElBQUksQ0FDUCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsYUFBYSxDQUNUO0lBQ0ksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzdDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEQsQ0FDSixFQUNELEtBQUssQ0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5Yik5pat5LiA5LiqIDl4OSDnmoTmlbDni6zmmK/lkKbmnInmlYjjgILlj6rpnIDopoHmoLnmja7ku6XkuIvop4TliJnvvIzpqozor4Hlt7Lnu4/loavlhaXnmoTmlbDlrZfmmK/lkKbmnInmlYjljbPlj6/jgIJcclxuXHJcbuaVsOWtlyAxLTkg5Zyo5q+P5LiA6KGM5Y+q6IO95Ye6546w5LiA5qyh44CCXHJcbuaVsOWtlyAxLTkg5Zyo5q+P5LiA5YiX5Y+q6IO95Ye6546w5LiA5qyh44CCXHJcbuaVsOWtlyAxLTkg5Zyo5q+P5LiA5Liq5Lul57KX5a6e57q/5YiG6ZqU55qEIDN4MyDlrqvlhoXlj6rog73lh7rnjrDkuIDmrKHjgIJcclxuXHJcblxyXG7kuIrlm77mmK/kuIDkuKrpg6jliIbloavlhYXnmoTmnInmlYjnmoTmlbDni6zjgIJcclxuXHJcbuaVsOeLrOmDqOWIhuepuuagvOWGheW3suWhq+WFpeS6huaVsOWtl++8jOepuueZveagvOeUqCAnLicg6KGo56S644CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTpcclxuW1xyXG4gIFtcIjVcIixcIjNcIixcIi5cIixcIi5cIixcIjdcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIl0sXHJcbiAgW1wiNlwiLFwiLlwiLFwiLlwiLFwiMVwiLFwiOVwiLFwiNVwiLFwiLlwiLFwiLlwiLFwiLlwiXSxcclxuICBbXCIuXCIsXCI5XCIsXCI4XCIsXCIuXCIsXCIuXCIsXCIuXCIsXCIuXCIsXCI2XCIsXCIuXCJdLFxyXG4gIFtcIjhcIixcIi5cIixcIi5cIixcIi5cIixcIjZcIixcIi5cIixcIi5cIixcIi5cIixcIjNcIl0sXHJcbiAgW1wiNFwiLFwiLlwiLFwiLlwiLFwiOFwiLFwiLlwiLFwiM1wiLFwiLlwiLFwiLlwiLFwiMVwiXSxcclxuICBbXCI3XCIsXCIuXCIsXCIuXCIsXCIuXCIsXCIyXCIsXCIuXCIsXCIuXCIsXCIuXCIsXCI2XCJdLFxyXG4gIFtcIi5cIixcIjZcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjJcIixcIjhcIixcIi5cIl0sXHJcbiAgW1wiLlwiLFwiLlwiLFwiLlwiLFwiNFwiLFwiMVwiLFwiOVwiLFwiLlwiLFwiLlwiLFwiNVwiXSxcclxuICBbXCIuXCIsXCIuXCIsXCIuXCIsXCIuXCIsXCI4XCIsXCIuXCIsXCIuXCIsXCI3XCIsXCI5XCJdXHJcbl1cclxu6L6T5Ye6OiB0cnVlXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOlxyXG5bXHJcbiAgW1wiOFwiLFwiM1wiLFwiLlwiLFwiLlwiLFwiN1wiLFwiLlwiLFwiLlwiLFwiLlwiLFwiLlwiXSxcclxuICBbXCI2XCIsXCIuXCIsXCIuXCIsXCIxXCIsXCI5XCIsXCI1XCIsXCIuXCIsXCIuXCIsXCIuXCJdLFxyXG4gIFtcIi5cIixcIjlcIixcIjhcIixcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjZcIixcIi5cIl0sXHJcbiAgW1wiOFwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiNlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiM1wiXSxcclxuICBbXCI0XCIsXCIuXCIsXCIuXCIsXCI4XCIsXCIuXCIsXCIzXCIsXCIuXCIsXCIuXCIsXCIxXCJdLFxyXG4gIFtcIjdcIixcIi5cIixcIi5cIixcIi5cIixcIjJcIixcIi5cIixcIi5cIixcIi5cIixcIjZcIl0sXHJcbiAgW1wiLlwiLFwiNlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiLlwiLFwiMlwiLFwiOFwiLFwiLlwiXSxcclxuICBbXCIuXCIsXCIuXCIsXCIuXCIsXCI0XCIsXCIxXCIsXCI5XCIsXCIuXCIsXCIuXCIsXCI1XCJdLFxyXG4gIFtcIi5cIixcIi5cIixcIi5cIixcIi5cIixcIjhcIixcIi5cIixcIi5cIixcIjdcIixcIjlcIl1cclxuXVxyXG7ovpPlh7o6IGZhbHNlXHJcbuino+mHijog6Zmk5LqG56ys5LiA6KGM55qE56ys5LiA5Liq5pWw5a2X5LuOIDUg5pS55Li6IDgg5Lul5aSW77yM56m65qC85YaF5YW25LuW5pWw5a2X5Z2H5LiOIOekuuS+izEg55u45ZCM44CCXHJcbiAgICAg5L2G55Sx5LqO5L2N5LqO5bem5LiK6KeS55qEIDN4MyDlrqvlhoXmnInkuKTkuKogOCDlrZjlnKgsIOWboOatpOi/meS4quaVsOeLrOaYr+aXoOaViOeahOOAglxyXG7or7TmmI46XHJcblxyXG7kuIDkuKrmnInmlYjnmoTmlbDni6zvvIjpg6jliIblt7LooqvloavlhYXvvInkuI3kuIDlrprmmK/lj6/op6PnmoTjgIJcclxu5Y+q6ZyA6KaB5qC55o2u5Lul5LiK6KeE5YiZ77yM6aqM6K+B5bey57uP5aGr5YWl55qE5pWw5a2X5piv5ZCm5pyJ5pWI5Y2z5Y+v44CCXHJcbue7meWumuaVsOeLrOW6j+WIl+WPquWMheWQq+aVsOWtlyAxLTkg5ZKM5a2X56ymICcuJyDjgIJcclxu57uZ5a6a5pWw54us5rC46L+c5pivIDl4OSDlvaLlvI/nmoTjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nW11bXX0gYm9hcmRcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnR5cGUgU3Vkb2t1RWxlbWVudCA9IFwiLlwiIHwgXCIxXCIgfCBcIjJcIiB8IFwiM1wiIHwgXCI0XCIgfCBcIjVcIiB8IFwiNlwiIHwgXCI3XCIgfCBcIjhcIiB8IFwiOVwiO1xyXG52YXIgaXNWYWxpZFN1ZG9rdSA9IGZ1bmN0aW9uIChib2FyZDogU3Vkb2t1RWxlbWVudFtdW10pIHtcclxuXHJcbiAgICAvLyDlrZjlgqjmr4/liJfnmoTnu5PmnpxcclxuICAgIGNvbnN0IGNvbHVtbnM6IG51bWJlcltdW10gPSBBcnJheSg5KS5maWxsKDApLm1hcCgoKSA9PiBbXSk7XHJcbiAgICAvLyDlrZjlgqjmr4/ooYznmoTnu5PmnpxcclxuICAgIGNvbnN0IHJvd3M6IG51bWJlcltdW10gPSBBcnJheSg5KS5maWxsKDApLm1hcCgoKSA9PiBbXSk7XHJcbiAgICAvLyDlrZjlgqjmr4/lnZfnmoTnu5PmnpxcclxuICAgIGNvbnN0IGJsb2NrczogbnVtYmVyW11bXSA9IEFycmF5KDkpLmZpbGwoMCkubWFwKCgpID0+IFtdKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIGlmIChudW0gPT09ICcuJykgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bV9lbGVtZW50ID0gcGFyc2VJbnQobnVtKTtcclxuICAgICAgICAgICAgY29uc3QgYm94X2luZGV4ID0gTWF0aC5mbG9vcihpIC8gMykgKiAzICsgTWF0aC5mbG9vcihqIC8gMyk7XHJcbiAgICAgICAgICAgIC8vIOiAgeagt+WtkCDlk4jluIzooagg5Yik5pat6YeN5aSNXHJcbiAgICAgICAgICAgIHJvd3NbaV1bbnVtX2VsZW1lbnRdID0gKHJvd3NbaV1bbnVtX2VsZW1lbnRdIHx8IDApICsgMTtcclxuICAgICAgICAgICAgY29sdW1uc1tqXVtudW1fZWxlbWVudF0gPSAoY29sdW1uc1tqXVtudW1fZWxlbWVudF0gfHwgMCkgKyAxO1xyXG4gICAgICAgICAgICBibG9ja3NbYm94X2luZGV4XVtudW1fZWxlbWVudF0gPSAoYmxvY2tzW2JveF9pbmRleF1bbnVtX2VsZW1lbnRdIHx8IDApICsgMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3dzW2ldW251bV9lbGVtZW50XSA+IDEgfHwgY29sdW1uc1tqXVtudW1fZWxlbWVudF0gPiAxIHx8IGJsb2Nrc1tib3hfaW5kZXhdW251bV9lbGVtZW50XSA+IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGlzVmFsaWRTdWRva3UoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbXCI1XCIsIFwiM1wiLCBcIi5cIiwgXCIuXCIsIFwiN1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIl0sXHJcbiAgICAgICAgICAgIFtcIjZcIiwgXCIuXCIsIFwiLlwiLCBcIjFcIiwgXCI5XCIsIFwiNVwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiXSxcclxuICAgICAgICAgICAgW1wiLlwiLCBcIjlcIiwgXCI4XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjZcIiwgXCIuXCJdLFxyXG4gICAgICAgICAgICBbXCI4XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjNcIl0sXHJcbiAgICAgICAgICAgIFtcIjRcIiwgXCIuXCIsIFwiLlwiLCBcIjhcIiwgXCIuXCIsIFwiM1wiLCBcIi5cIiwgXCIuXCIsIFwiMVwiXSxcclxuICAgICAgICAgICAgW1wiN1wiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjJcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI2XCJdLFxyXG4gICAgICAgICAgICBbXCIuXCIsIFwiNlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIyXCIsIFwiOFwiLCBcIi5cIl0sXHJcbiAgICAgICAgICAgIFtcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjRcIiwgXCIxXCIsIFwiOVwiLCBcIi5cIiwgXCIuXCIsIFwiNVwiXSxcclxuICAgICAgICAgICAgW1wiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjhcIiwgXCIuXCIsIFwiLlwiLCBcIjdcIiwgXCI5XCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICApLFxyXG4gICAgdHJ1ZSxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgaXNWYWxpZFN1ZG9rdShcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFtcIjhcIiwgXCIzXCIsIFwiLlwiLCBcIi5cIiwgXCI3XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiXSxcclxuICAgICAgICAgICAgW1wiNlwiLCBcIi5cIiwgXCIuXCIsIFwiMVwiLCBcIjlcIiwgXCI1XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCJdLFxyXG4gICAgICAgICAgICBbXCIuXCIsIFwiOVwiLCBcIjhcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNlwiLCBcIi5cIl0sXHJcbiAgICAgICAgICAgIFtcIjhcIiwgXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCI2XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiM1wiXSxcclxuICAgICAgICAgICAgW1wiNFwiLCBcIi5cIiwgXCIuXCIsIFwiOFwiLCBcIi5cIiwgXCIzXCIsIFwiLlwiLCBcIi5cIiwgXCIxXCJdLFxyXG4gICAgICAgICAgICBbXCI3XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiMlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjZcIl0sXHJcbiAgICAgICAgICAgIFtcIi5cIiwgXCI2XCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiLlwiLCBcIjJcIiwgXCI4XCIsIFwiLlwiXSxcclxuICAgICAgICAgICAgW1wiLlwiLCBcIi5cIiwgXCIuXCIsIFwiNFwiLCBcIjFcIiwgXCI5XCIsIFwiLlwiLCBcIi5cIiwgXCI1XCJdLFxyXG4gICAgICAgICAgICBbXCIuXCIsIFwiLlwiLCBcIi5cIiwgXCIuXCIsIFwiOFwiLCBcIi5cIiwgXCIuXCIsIFwiN1wiLCBcIjlcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICksXHJcbiAgICBmYWxzZSxcclxuKTtcclxuIl19