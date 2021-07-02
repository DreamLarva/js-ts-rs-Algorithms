"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 求最大公约数
 * 辗转相除法
 * @link http://blog.jobbole.com/106315/
 * */
function gcd(a, b) {
    if (a === b) {
        return a;
    }
    if (a < b) {
        return gcd(b, a);
    }
    else {
        // &1 最快判断是否是偶数
        // 如果两个都是偶数 则公约数一定是偶数
        if (!(a & 1) && !(b & 1)) {
            return gcd(a >> 1, b >> 1) << 1;
        }
        else if (!(a & 1) && b & 1) {
            return gcd(a >> 1, b);
        }
        else if (a & 1 && !(b & 1)) {
            return gcd(a, b >> 1);
        }
        else {
            return gcd(b, a - b);
        }
    }
}
exports.default = gcd;
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(gcd(18, 24), 6);
assert_1.default.strictEqual(gcd(20, 2100), 20);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5rGC5pyA5aSn5YWs57qm5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5rGC5pyA5aSn5YWs57qm5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7S0FJSztBQUNMLFNBQXdCLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDWCxPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1QsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO1NBQU07UUFDTCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7QUFDSCxDQUFDO0FBbkJELHNCQW1CQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaxguacgOWkp+WFrOe6puaVsFxuICog6L6X6L2s55u46Zmk5rOVXG4gKiBAbGluayBodHRwOi8vYmxvZy5qb2Jib2xlLmNvbS8xMDYzMTUvXG4gKiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2NkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIGdjZChiLCBhKTtcbiAgfSBlbHNlIHtcbiAgICAvLyAmMSDmnIDlv6vliKTmlq3mmK/lkKbmmK/lgbbmlbBcbiAgICAvLyDlpoLmnpzkuKTkuKrpg73mmK/lgbbmlbAg5YiZ5YWs57qm5pWw5LiA5a6a5piv5YG25pWwXG4gICAgaWYgKCEoYSAmIDEpICYmICEoYiAmIDEpKSB7XG4gICAgICByZXR1cm4gZ2NkKGEgPj4gMSwgYiA+PiAxKSA8PCAxO1xuICAgIH0gZWxzZSBpZiAoIShhICYgMSkgJiYgYiAmIDEpIHtcbiAgICAgIHJldHVybiBnY2QoYSA+PiAxLCBiKTtcbiAgICB9IGVsc2UgaWYgKGEgJiAxICYmICEoYiAmIDEpKSB7XG4gICAgICByZXR1cm4gZ2NkKGEsIGIgPj4gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnY2QoYiwgYSAtIGIpO1xuICAgIH1cbiAgfVxufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChnY2QoMTgsIDI0KSwgNik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoZ2NkKDIwLCAyMTAwKSwgMjApO1xuIl19