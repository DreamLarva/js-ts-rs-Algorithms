"use strict";
/*
179. 最大数
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。



示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
示例 3：

输入：nums = [1]
输出："1"
示例 4：

输入：nums = [10]
输出："10"


提示：

1 <= nums.length <= 100
0 <= nums[i] <= 109
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function largestNumber(nums) {
    return nums
        .map(String)
        .sort((a, b) => (parseInt(a + b) > parseInt(b + a) ? -1 : 1))
        .reduce((previousValue, currentValue) => previousValue + currentValue)
        .replace(/^0+/, "0");
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(largestNumber([10, 2]), "210");
assert_1.default.strictEqual(largestNumber([3, 30, 34, 5, 9]), "9534330");
assert_1.default.strictEqual(largestNumber([1]), "1");
assert_1.default.strictEqual(largestNumber([10]), "10");
assert_1.default.strictEqual(largestNumber([34323, 3432]), "343234323");
assert_1.default.strictEqual(largestNumber([0, 0]), "0");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTc5LuacgOWkp+aVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTc5LuacgOWkp+aVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTs7Ozs7QUFFSixTQUFTLGFBQWEsQ0FBQyxJQUFjO0lBQ25DLE9BQU8sSUFBSTtTQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVELE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7U0FDckUsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM5RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4xNzkuIOacgOWkp+aVsFxu57uZ5a6a5LiA57uE6Z2e6LSf5pW05pWwIG51bXPvvIzph43mlrDmjpLliJfmr4/kuKrmlbDnmoTpobrluo/vvIjmr4/kuKrmlbDkuI3lj6/mi4bliIbvvInkvb/kuYvnu4TmiJDkuIDkuKrmnIDlpKfnmoTmlbTmlbDjgIJcblxu5rOo5oSP77ya6L6T5Ye657uT5p6c5Y+v6IO96Z2e5bi45aSn77yM5omA5Lul5L2g6ZyA6KaB6L+U5Zue5LiA5Liq5a2X56ym5Liy6ICM5LiN5piv5pW05pWw44CCXG5cblxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzEwLDJdXG7ovpPlh7rvvJpcIjIxMFwiXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzMsMzAsMzQsNSw5XVxu6L6T5Ye677yaXCI5NTM0MzMwXCJcbuekuuS+iyAz77yaXG5cbui+k+WFpe+8mm51bXMgPSBbMV1cbui+k+WHuu+8mlwiMVwiXG7npLrkvosgNO+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzEwXVxu6L6T5Ye677yaXCIxMFwiXG5cblxu5o+Q56S677yaXG5cbjEgPD0gbnVtcy5sZW5ndGggPD0gMTAwXG4wIDw9IG51bXNbaV0gPD0gMTA5XG4qICovXG5cbmZ1bmN0aW9uIGxhcmdlc3ROdW1iZXIobnVtczogbnVtYmVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gbnVtc1xuICAgIC5tYXAoU3RyaW5nKVxuICAgIC5zb3J0KChhLCBiKSA9PiAocGFyc2VJbnQoYSArIGIpID4gcGFyc2VJbnQoYiArIGEpID8gLTEgOiAxKSlcbiAgICAucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWUpXG4gICAgLnJlcGxhY2UoL14wKy8sIFwiMFwiKTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0TnVtYmVyKFsxMCwgMl0pLCBcIjIxMFwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0TnVtYmVyKFszLCAzMCwgMzQsIDUsIDldKSwgXCI5NTM0MzMwXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3ROdW1iZXIoWzFdKSwgXCIxXCIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3ROdW1iZXIoWzEwXSksIFwiMTBcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGFyZ2VzdE51bWJlcihbMzQzMjMsIDM0MzJdKSwgXCIzNDMyMzQzMjNcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGFyZ2VzdE51bWJlcihbMCwwXSksIFwiMFwiKTtcbiJdfQ==