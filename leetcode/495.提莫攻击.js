"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。

你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。

示例1:

输入: [1,4], 2
输出: 4
原因: 在第 1 秒开始时，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒钟结束。
在第 4 秒开始时，提莫再次攻击艾希，使得艾希获得另外 2 秒的中毒时间。
所以最终输出 4 秒。
示例2:

输入: [1,2], 2
输出: 3
原因: 在第 1 秒开始时，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒钟结束。
但是在第 2 秒开始时，提莫再次攻击了已经处于中毒状态的艾希。
由于中毒状态不可叠加，提莫在第 2 秒开始时的这次攻击会在第 3 秒钟结束。
所以最终输出 3。
注意：
    1.你可以假定时间序列数组的总长度不超过 10000。
    2.你可以假定提莫攻击时间序列中的数字和提莫攻击的中毒持续时间都是非负整数，并且不超过 10,000,000。
* */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length === 0)
        return 0;
    let totalTime = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (i === 0)
            continue;
        totalTime += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    // 最后一次攻击的 持续时间
    totalTime += duration;
    return totalTime;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(findPoisonedDuration([1, 4], 2), 4);
assert_1.default.deepStrictEqual(findPoisonedDuration([1, 2, 10], 3), 7);
assert_1.default.deepStrictEqual(findPoisonedDuration([1, 2, 10], 99), 108);
assert_1.default.deepStrictEqual(findPoisonedDuration([], 10000), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk1LuaPkOiOq+aUu+WHuy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDk1LuaPkOiOq+aUu+WHuy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLG9CQUFvQixHQUFHLFVBQVUsVUFBb0IsRUFBRSxRQUFnQjtJQUN2RSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsU0FBUztRQUN0QixTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN0RTtJQUNELGVBQWU7SUFDZixTQUFTLElBQUksUUFBUSxDQUFDO0lBQ3RCLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0QsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xFLGdCQUFNLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWcqOOAiuiLsembhOiBlOebn+OAi+eahOS4lueVjOS4re+8jOacieS4gOS4quWPqyDigJzmj5DojqvigJ0g55qE6Iux6ZuE77yM5LuW55qE5pS75Ye75Y+v5Lul6K6p5pWM5pa56Iux6ZuE6Im+5biM77yI57yW6ICF5rOo77ya5a+S5Yaw5bCE5omL77yJ6L+b5YWl5Lit5q+S54q25oCB44CC546w5Zyo77yM57uZ5Ye65o+Q6I6r5a+56Im+5biM55qE5pS75Ye75pe26Ze05bqP5YiX5ZKM5o+Q6I6r5pS75Ye755qE5Lit5q+S5oyB57ut5pe26Ze077yM5L2g6ZyA6KaB6L6T5Ye66Im+5biM55qE5Lit5q+S54q25oCB5oC75pe26ZW/44CCXHJcblxyXG7kvaDlj6/ku6XorqTkuLrmj5DojqvlnKjnu5nlrprnmoTml7bpl7Tngrnov5vooYzmlLvlh7vvvIzlubbnq4vljbPkvb/oib7luIzlpITkuo7kuK3mr5LnirbmgIHjgIJcclxuXHJcbuekuuS+izE6XHJcblxyXG7ovpPlhaU6IFsxLDRdLCAyXHJcbui+k+WHujogNFxyXG7ljp/lm6A6IOWcqOesrCAxIOenkuW8gOWni+aXtu+8jOaPkOiOq+W8gOWni+WvueiJvuW4jOi/m+ihjOaUu+WHu+W5tuS9v+WFtueri+WNs+S4reavkuOAguS4reavkueKtuaAgeS8mue7tOaMgSAyIOenkumSn++8jOebtOWIsOesrCAyIOenkumSn+e7k+adn+OAglxyXG7lnKjnrKwgNCDnp5LlvIDlp4vml7bvvIzmj5Dojqvlho3mrKHmlLvlh7voib7luIzvvIzkvb/lvpfoib7luIzojrflvpflj6blpJYgMiDnp5LnmoTkuK3mr5Lml7bpl7TjgIJcclxu5omA5Lul5pyA57uI6L6T5Ye6IDQg56eS44CCXHJcbuekuuS+izI6XHJcblxyXG7ovpPlhaU6IFsxLDJdLCAyXHJcbui+k+WHujogM1xyXG7ljp/lm6A6IOWcqOesrCAxIOenkuW8gOWni+aXtu+8jOaPkOiOq+W8gOWni+WvueiJvuW4jOi/m+ihjOaUu+WHu+W5tuS9v+WFtueri+WNs+S4reavkuOAguS4reavkueKtuaAgeS8mue7tOaMgSAyIOenkumSn++8jOebtOWIsOesrCAyIOenkumSn+e7k+adn+OAglxyXG7kvYbmmK/lnKjnrKwgMiDnp5LlvIDlp4vml7bvvIzmj5Dojqvlho3mrKHmlLvlh7vkuoblt7Lnu4/lpITkuo7kuK3mr5LnirbmgIHnmoToib7luIzjgIJcclxu55Sx5LqO5Lit5q+S54q25oCB5LiN5Y+v5Y+g5Yqg77yM5o+Q6I6r5Zyo56ysIDIg56eS5byA5aeL5pe255qE6L+Z5qyh5pS75Ye75Lya5Zyo56ysIDMg56eS6ZKf57uT5p2f44CCXHJcbuaJgOS7peacgOe7iOi+k+WHuiAz44CCXHJcbuazqOaEj++8mlxyXG4gICAgMS7kvaDlj6/ku6XlgYflrprml7bpl7Tluo/liJfmlbDnu4TnmoTmgLvplb/luqbkuI3otoXov4cgMTAwMDDjgIJcclxuICAgIDIu5L2g5Y+v5Lul5YGH5a6a5o+Q6I6r5pS75Ye75pe26Ze05bqP5YiX5Lit55qE5pWw5a2X5ZKM5o+Q6I6r5pS75Ye755qE5Lit5q+S5oyB57ut5pe26Ze06YO95piv6Z2e6LSf5pW05pWw77yM5bm25LiU5LiN6LaF6L+HIDEwLDAwMCwwMDDjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gdGltZVNlcmllc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIGZpbmRQb2lzb25lZER1cmF0aW9uID0gZnVuY3Rpb24gKHRpbWVTZXJpZXM6IG51bWJlcltdLCBkdXJhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGltZVNlcmllcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG4gICAgbGV0IHRvdGFsVGltZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVTZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA9PT0gMCkgY29udGludWU7XHJcbiAgICAgICAgdG90YWxUaW1lICs9IE1hdGgubWluKHRpbWVTZXJpZXNbaV0gLSB0aW1lU2VyaWVzW2kgLSAxXSwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgLy8g5pyA5ZCO5LiA5qyh5pS75Ye755qEIOaMgee7reaXtumXtFxyXG4gICAgdG90YWxUaW1lICs9IGR1cmF0aW9uO1xyXG4gICAgcmV0dXJuIHRvdGFsVGltZTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kUG9pc29uZWREdXJhdGlvbihbMSwgNF0sIDIpLCA0KTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChmaW5kUG9pc29uZWREdXJhdGlvbihbMSwgMiwgMTBdLCAzKSwgNyk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZmluZFBvaXNvbmVkRHVyYXRpb24oWzEsIDIsIDEwXSwgOTkpLCAxMDgpO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpbmRQb2lzb25lZER1cmF0aW9uKFtdLCAxMDAwMCksIDApO1xyXG4iXX0=