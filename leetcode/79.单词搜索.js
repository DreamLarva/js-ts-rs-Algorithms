"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function exist(board, word) {
    const m = board.length;
    const n = board[0].length;
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ]; // 四个方向
    // 已经走过的格子
    const visited = Array.from({ length: m }).map(() => Array(n).fill(false));
    function backTrace(y, x, word, index) {
        if (board[y][x] != word.charAt(index)) {
            return false;
        }
        else if (index === word.length - 1) {
            return true;
        }
        visited[y][x] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newX = dx + x;
            let newY = dy + y;
            if (newX >= 0 && newY >= 0 && newX < n && newY < m) {
                if (!visited[newY][newX]) {
                    /**
                     * 递归中快速 中断的方法
                     * 存一个值, 到达目标直接 break 并且返回
                     * */
                    if (backTrace(newY, newX, word, index + 1)) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[y][x] = false;
        return result;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backTrace(i, j, word, 0))
                return true;
        }
    }
    return false;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(exist([
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
], "AAB"), true);
assert_1.default.strictEqual(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
], "ABCCED"), true);
assert_1.default.strictEqual(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
], "SEE"), true);
assert_1.default.strictEqual(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
], "ABCA"), false);
assert_1.default.strictEqual(exist([["A", "A"]], "AAA"), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzku5Y2V6K+N5pCc57SiLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83OS7ljZXor43mkJzntKIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFzQ0EsU0FBUyxLQUFLLENBQUMsS0FBaUIsRUFBRSxJQUFZO0lBQzVDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMxQixNQUFNLFVBQVUsR0FBRztRQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1IsQ0FBQyxDQUFDLE9BQU87SUFFVixVQUFVO0lBQ1YsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFMUUsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUNsRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztR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Q0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjc5LiDljZXor43mkJzntKJcbue7meWumuS4gOS4qiBtIHggbiDkuoznu7TlrZfnrKbnvZHmoLwgYm9hcmQg5ZKM5LiA5Liq5a2X56ym5Liy5Y2V6K+NIHdvcmQg44CC5aaC5p6cIHdvcmQg5a2Y5Zyo5LqO572R5qC85Lit77yM6L+U5ZueIHRydWUg77yb5ZCm5YiZ77yM6L+U5ZueIGZhbHNlIOOAglxuXG7ljZXor43lv4XpobvmjInnhaflrZfmr43pobrluo/vvIzpgJrov4fnm7jpgrvnmoTljZXlhYPmoLzlhoXnmoTlrZfmr43mnoTmiJDvvIzlhbbkuK3igJznm7jpgrvigJ3ljZXlhYPmoLzmmK/pgqPkupvmsLTlubPnm7jpgrvmiJblnoLnm7Tnm7jpgrvnmoTljZXlhYPmoLzjgILlkIzkuIDkuKrljZXlhYPmoLzlhoXnmoTlrZfmr43kuI3lhYHorrjooqvph43lpI3kvb/nlKjjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cblxu6L6T5YWl77yaYm9hcmQgPSBbW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRVwiXSxbXCJTXCIsXCJGXCIsXCJDXCIsXCJTXCJdLFtcIkFcIixcIkRcIixcIkVcIixcIkVcIl1dLCB3b3JkID0gXCJBQkNDRURcIlxu6L6T5Ye677yadHJ1ZVxu56S65L6LIDLvvJpcblxuXG7ovpPlhaXvvJpib2FyZCA9IFtbXCJBXCIsXCJCXCIsXCJDXCIsXCJFXCJdLFtcIlNcIixcIkZcIixcIkNcIixcIlNcIl0sW1wiQVwiLFwiRFwiLFwiRVwiLFwiRVwiXV0sIHdvcmQgPSBcIlNFRVwiXG7ovpPlh7rvvJp0cnVlXG7npLrkvosgM++8mlxuXG5cbui+k+WFpe+8mmJvYXJkID0gW1tcIkFcIixcIkJcIixcIkNcIixcIkVcIl0sW1wiU1wiLFwiRlwiLFwiQ1wiLFwiU1wiXSxbXCJBXCIsXCJEXCIsXCJFXCIsXCJFXCJdXSwgd29yZCA9IFwiQUJDQlwiXG7ovpPlh7rvvJpmYWxzZVxuXG5cbuaPkOekuu+8mlxuXG5tID09IGJvYXJkLmxlbmd0aFxubiA9IGJvYXJkW2ldLmxlbmd0aFxuMSA8PSBtLCBuIDw9IDZcbjEgPD0gd29yZC5sZW5ndGggPD0gMTVcbmJvYXJkIOWSjCB3b3JkIOS7heeUseWkp+Wwj+WGmeiLseaWh+Wtl+avjee7hOaIkFxuXG5cbui/m+mYtu+8muS9oOWPr+S7peS9v+eUqOaQnOe0ouWJquaeneeahOaKgOacr+adpeS8mOWMluino+WGs+aWueahiO+8jOS9v+WFtuWcqCBib2FyZCDmm7TlpKfnmoTmg4XlhrXkuIvlj6/ku6Xmm7Tlv6vop6PlhrPpl67popjvvJ9cbiogKi9cbmltcG9ydCB7IGJvb2wgfSBmcm9tIFwieXVwXCI7XG5cbmZ1bmN0aW9uIGV4aXN0KGJvYXJkOiBzdHJpbmdbXVtdLCB3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbSA9IGJvYXJkLmxlbmd0aDtcbiAgY29uc3QgbiA9IGJvYXJkWzBdLmxlbmd0aDtcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICBbMCwgMV0sXG4gICAgWzAsIC0xXSxcbiAgICBbMSwgMF0sXG4gICAgWy0xLCAwXSxcbiAgXTsgLy8g5Zub5Liq5pa55ZCRXG5cbiAgLy8g5bey57uP6LWw6L+H55qE5qC85a2QXG4gIGNvbnN0IHZpc2l0ZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBtIH0pLm1hcCgoKSA9PiBBcnJheShuKS5maWxsKGZhbHNlKSk7XG5cbiAgZnVuY3Rpb24gYmFja1RyYWNlKHk6IG51bWJlciwgeDogbnVtYmVyLCB3b3JkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoYm9hcmRbeV1beF0gIT0gd29yZC5jaGFyQXQoaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gd29yZC5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmlzaXRlZFt5XVt4XSA9IHRydWU7XG5cbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IFtkeCwgZHldIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgIGxldCBuZXdYID0gZHggKyB4O1xuICAgICAgbGV0IG5ld1kgPSBkeSArIHk7XG4gICAgICBpZiAobmV3WCA+PSAwICYmIG5ld1kgPj0gMCAmJiBuZXdYIDwgbiAmJiBuZXdZIDwgbSkge1xuICAgICAgICBpZiAoIXZpc2l0ZWRbbmV3WV1bbmV3WF0pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDpgJLlvZLkuK3lv6vpgJ8g5Lit5pat55qE5pa55rOVXG4gICAgICAgICAgICog5a2Y5LiA5Liq5YC8LCDliLDovr7nm67moIfnm7TmjqUgYnJlYWsg5bm25LiU6L+U5ZueXG4gICAgICAgICAgICogKi9cbiAgICAgICAgICBpZiAoYmFja1RyYWNlKG5ld1ksIG5ld1gsIHdvcmQsIGluZGV4ICsgMSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2aXNpdGVkW3ldW3hdID0gZmFsc2U7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGlmIChiYWNrVHJhY2UoaSwgaiwgd29yZCwgMCkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGV4aXN0KFxuICAgIFtcbiAgICAgIFtcIkNcIiwgXCJBXCIsIFwiQVwiXSxcbiAgICAgIFtcIkFcIiwgXCJBXCIsIFwiQVwiXSxcbiAgICAgIFtcIkJcIiwgXCJDXCIsIFwiRFwiXSxcbiAgICBdLFxuXG4gICAgXCJBQUJcIlxuICApLFxuICB0cnVlXG4pO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGV4aXN0KFxuICAgIFtcbiAgICAgIFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkVcIl0sXG4gICAgICBbXCJTXCIsIFwiRlwiLCBcIkNcIiwgXCJTXCJdLFxuICAgICAgW1wiQVwiLCBcIkRcIiwgXCJFXCIsIFwiRVwiXSxcbiAgICBdLFxuICAgIFwiQUJDQ0VEXCJcbiAgKSxcbiAgdHJ1ZVxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgZXhpc3QoXG4gICAgW1xuICAgICAgW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRVwiXSxcbiAgICAgIFtcIlNcIiwgXCJGXCIsIFwiQ1wiLCBcIlNcIl0sXG4gICAgICBbXCJBXCIsIFwiRFwiLCBcIkVcIiwgXCJFXCJdLFxuICAgIF0sXG4gICAgXCJTRUVcIlxuICApLFxuICB0cnVlXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBleGlzdChcbiAgICBbXG4gICAgICBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJFXCJdLFxuICAgICAgW1wiU1wiLCBcIkZcIiwgXCJDXCIsIFwiU1wiXSxcbiAgICAgIFtcIkFcIiwgXCJEXCIsIFwiRVwiLCBcIkVcIl0sXG4gICAgXSxcbiAgICBcIkFCQ0FcIlxuICApLFxuICBmYWxzZVxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChleGlzdChbW1wiQVwiLCBcIkFcIl1dLCBcIkFBQVwiKSwgZmFsc2UpO1xuIl19