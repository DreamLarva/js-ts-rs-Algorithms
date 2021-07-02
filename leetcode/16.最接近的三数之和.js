"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // 方法类似于 15.三数之和 只是结果需要一次处理而已
    // 将 0 处理为 target变量
    // 使用三个指针
    // 当前指正  当前指针后的一个位置 和 数组最后的位置
    nums.sort((a, b) => a - b);
    let result = Infinity;
    for (let i = 0; i < nums.length - 2;) {
        let left = i + 1;
        let right = nums.length - 1;
        // 优化
        // 如果 result 已经小于 target 那么 之后的操作的可能的最大值 不能小于 result
        // 经过测试 似乎 这个逻辑 是不能走到的 因为 i++ 的 情况 整个 result 可能的趋势 都是增加的
        // if (result < target && nums[right] * 2 + nums[i] <= result) {
        //     i++;
        //     continue;
        // }
        // 如果 result 已经大于 target 那么 之后的操作的可能的最小值 不能大于 result
        if (result > target && nums[left] * 2 + nums[i] >= result) {
            i++;
            continue;
        }
        while (left < right) {
            const sum = nums[left] + nums[i] + nums[right];
            if (Math.abs(target - result) > Math.abs(sum - target)) {
                result = sum;
            }
            if (sum === target)
                return target;
            if (sum < target)
                while (left < right && nums[++left] === nums[left - 1]) { }
            else
                while (left < right && nums[--right] === nums[right + 1]) { }
        }
        // 由于是已经排序的 数组, 最左侧的指针的值 如果相同就没有必要再计算一次
        while (nums[i] === nums[++i]) { }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(threeSumClosest([-1, 2, 1, -4], 1), 2);
assert_1.default.strictEqual(threeSumClosest([-1, 2, 1, -4, -1, 2, 1, -4], 5), 5);
assert_1.default.strictEqual(threeSumClosest([-1, 2, 1, -4, -1, 2, 1, -4], 5), 5);
assert_1.default.strictEqual(threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], -2), -7);
// threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], -200);
// threeSumClosest([12, 39, -96, 88, 76, 63, -11, 43, -95, 43], 10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYu5pyA5o6l6L+R55qE5LiJ5pWw5LmL5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNi7mnIDmjqXov5HnmoTkuInmlbDkuYvlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7SUFXSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQzVELDZCQUE2QjtJQUM3QixtQkFBbUI7SUFFbkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTNCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUk7UUFDckMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUU1QixLQUFLO1FBQ0wsb0RBQW9EO1FBQ3BELHdEQUF3RDtRQUN4RCxnRUFBZ0U7UUFDaEUsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixJQUFJO1FBRUosb0RBQW9EO1FBQ3BELElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDekQsQ0FBQyxFQUFFLENBQUM7WUFDSixTQUFTO1NBQ1Y7UUFFRCxPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7WUFDbkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRTtnQkFDdEQsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNkO1lBRUQsSUFBSSxHQUFHLEtBQUssTUFBTTtnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUNsQyxJQUFJLEdBQUcsR0FBRyxNQUFNO2dCQUNkLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUU7O2dCQUN2RCxPQUFPLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFFO1NBQ2xFO1FBRUQsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7S0FDakM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTFELGdCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhFLGdCQUFNLENBQUMsV0FBVyxDQUNoQixlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNoRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBRUYsc0VBQXNFO0FBQ3RFLG9FQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrljIXmi6wgbiDkuKrmlbTmlbDnmoTmlbDnu4QgbnVtcyDlkowg5LiA5Liq55uu5qCH5YC8IHRhcmdldOOAguaJvuWHuiBudW1zIOS4reeahOS4ieS4quaVtOaVsO+8jOS9v+W+l+Wug+S7rOeahOWSjOS4jiB0YXJnZXQg5pyA5o6l6L+R44CCXG7ov5Tlm57ov5nkuInkuKrmlbDnmoTlkozjgILlgYflrprmr4/nu4TovpPlhaXlj6rlrZjlnKjllK/kuIDnrZTmoYjjgIJcblxu5L6L5aaC77yM57uZ5a6a5pWw57uEIG51bXMgPSBbLTHvvIwy77yMMe+8jC00XSwg5ZKMIHRhcmdldCA9IDEuXG5cbuS4jiB0YXJnZXQg5pyA5o6l6L+R55qE5LiJ5Liq5pWw55qE5ZKM5Li6IDIuICgtMSArIDIgKyAxID0gMikuXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy8zc3VtLWNsb3Nlc3RcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciB0aHJlZVN1bUNsb3Nlc3QgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIC8vIOaWueazleexu+S8vOS6jiAxNS7kuInmlbDkuYvlkowg5Y+q5piv57uT5p6c6ZyA6KaB5LiA5qyh5aSE55CG6ICM5beyXG4gIC8vIOWwhiAwIOWkhOeQhuS4uiB0YXJnZXTlj5jph49cblxuICAvLyDkvb/nlKjkuInkuKrmjIfpkohcbiAgLy8g5b2T5YmN5oyH5q2jICDlvZPliY3mjIfpkojlkI7nmoTkuIDkuKrkvY3nva4g5ZKMIOaVsOe7hOacgOWQjueahOS9jee9rlxuICBudW1zLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICBsZXQgcmVzdWx0ID0gSW5maW5pdHk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aCAtIDI7ICkge1xuICAgIGxldCBsZWZ0ID0gaSArIDE7XG4gICAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuXG4gICAgLy8g5LyY5YyWXG4gICAgLy8g5aaC5p6cIHJlc3VsdCDlt7Lnu4/lsI/kuo4gdGFyZ2V0IOmCo+S5iCDkuYvlkI7nmoTmk43kvZznmoTlj6/og73nmoTmnIDlpKflgLwg5LiN6IO95bCP5LqOIHJlc3VsdFxuICAgIC8vIOe7j+i/h+a1i+ivlSDkvLzkuY4g6L+Z5Liq6YC76L6RIOaYr+S4jeiDvei1sOWIsOeahCDlm6DkuLogaSsrIOeahCDmg4XlhrUg5pW05LiqIHJlc3VsdCDlj6/og73nmoTotovlir8g6YO95piv5aKe5Yqg55qEXG4gICAgLy8gaWYgKHJlc3VsdCA8IHRhcmdldCAmJiBudW1zW3JpZ2h0XSAqIDIgKyBudW1zW2ldIDw9IHJlc3VsdCkge1xuICAgIC8vICAgICBpKys7XG4gICAgLy8gICAgIGNvbnRpbnVlO1xuICAgIC8vIH1cblxuICAgIC8vIOWmguaenCByZXN1bHQg5bey57uP5aSn5LqOIHRhcmdldCDpgqPkuYgg5LmL5ZCO55qE5pON5L2c55qE5Y+v6IO955qE5pyA5bCP5YC8IOS4jeiDveWkp+S6jiByZXN1bHRcbiAgICBpZiAocmVzdWx0ID4gdGFyZ2V0ICYmIG51bXNbbGVmdF0gKiAyICsgbnVtc1tpXSA+PSByZXN1bHQpIHtcbiAgICAgIGkrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcbiAgICAgIGNvbnN0IHN1bSA9IG51bXNbbGVmdF0gKyBudW1zW2ldICsgbnVtc1tyaWdodF07XG4gICAgICBpZiAoTWF0aC5hYnModGFyZ2V0IC0gcmVzdWx0KSA+IE1hdGguYWJzKHN1bSAtIHRhcmdldCkpIHtcbiAgICAgICAgcmVzdWx0ID0gc3VtO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VtID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXQ7XG4gICAgICBpZiAoc3VtIDwgdGFyZ2V0KVxuICAgICAgICB3aGlsZSAobGVmdCA8IHJpZ2h0ICYmIG51bXNbKytsZWZ0XSA9PT0gbnVtc1tsZWZ0IC0gMV0pIHt9XG4gICAgICBlbHNlIHdoaWxlIChsZWZ0IDwgcmlnaHQgJiYgbnVtc1stLXJpZ2h0XSA9PT0gbnVtc1tyaWdodCArIDFdKSB7fVxuICAgIH1cblxuICAgIC8vIOeUseS6juaYr+W3sue7j+aOkuW6j+eahCDmlbDnu4QsIOacgOW3puS+p+eahOaMh+mSiOeahOWAvCDlpoLmnpznm7jlkIzlsLHmsqHmnInlv4XopoHlho3orqHnrpfkuIDmrKFcbiAgICB3aGlsZSAobnVtc1tpXSA9PT0gbnVtc1srK2ldKSB7fVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwodGhyZWVTdW1DbG9zZXN0KFstMSwgMiwgMSwgLTRdLCAxKSwgMik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCh0aHJlZVN1bUNsb3Nlc3QoWy0xLCAyLCAxLCAtNCwgLTEsIDIsIDEsIC00XSwgNSksIDUpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwodGhyZWVTdW1DbG9zZXN0KFstMSwgMiwgMSwgLTQsIC0xLCAyLCAxLCAtNF0sIDUpLCA1KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICB0aHJlZVN1bUNsb3Nlc3QoWzEyLCAzOSwgLTk2LCA4OCwgNzYsIDYzLCAtMTEsIDQzLCAtOTUsIDQzXSwgLTIpLFxuICAtN1xuKTtcblxuLy8gdGhyZWVTdW1DbG9zZXN0KFsxMiwgMzksIC05NiwgODgsIDc2LCA2MywgLTExLCA0MywgLTk1LCA0M10sIC0yMDApO1xuLy8gdGhyZWVTdW1DbG9zZXN0KFsxMiwgMzksIC05NiwgODgsIDc2LCA2MywgLTExLCA0MywgLTk1LCA0M10sIDEwKTtcbiJdfQ==