"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
852. 山脉数组的峰顶索引
符合下列属性的数组 arr 称为 山脉数组 ：
arr.length >= 3
存在 i（0 < i < arr.length - 1）使得：
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。



示例 1：

输入：arr = [0,1,0]
输出：1
示例 2：

输入：arr = [0,2,1,0]
输出：1
示例 3：

输入：arr = [0,10,5,2]
输出：1
示例 4：

输入：arr = [3,4,5,1]
输出：2
示例 5：

输入：arr = [24,69,100,99,79,78,67,36,26,19]
输出：2


提示：

3 <= arr.length <= 104
0 <= arr[i] <= 106
题目数据保证 arr 是一个山脉数组


进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？


* */
function peakIndexInMountainArray(arr) {
    const l = arr.length;
    let left = 0;
    let right = l - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }
        else if (arr[mid] > arr[mid + 1]) {
            right = mid;
        }
    }
    return left;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(peakIndexInMountainArray([0, 1, 0]), 1);
assert_1.default.strictEqual(peakIndexInMountainArray([0, 2, 1, 0]), 1);
assert_1.default.strictEqual(peakIndexInMountainArray([0, 10, 5, 2]), 1);
assert_1.default.strictEqual(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]), 2);
assert_1.default.strictEqual(peakIndexInMountainArray([40, 48, 61, 75, 100, 99, 98, 39, 30, 10]), 4);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODUyLuWxseiEieaVsOe7hOeahOWzsOmhtue0ouW8lS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODUyLuWxseiEieaVsOe7hOeahOWzsOmhtue0ouW8lS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkNJO0FBQ0osU0FBUyx3QkFBd0IsQ0FBQyxHQUFhO0lBQzdDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDbkIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzNCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2I7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9ELGdCQUFNLENBQUMsV0FBVyxDQUNoQix3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ25FLENBQUMsQ0FDRixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2hCLHdCQUF3QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbkUsQ0FBQyxDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuODUyLiDlsbHohInmlbDnu4TnmoTls7DpobbntKLlvJVcbuespuWQiOS4i+WIl+WxnuaAp+eahOaVsOe7hCBhcnIg56ew5Li6IOWxseiEieaVsOe7hCDvvJpcbmFyci5sZW5ndGggPj0gM1xu5a2Y5ZyoIGnvvIgwIDwgaSA8IGFyci5sZW5ndGggLSAx77yJ5L2/5b6X77yaXG5hcnJbMF0gPCBhcnJbMV0gPCAuLi4gYXJyW2ktMV0gPCBhcnJbaV1cbmFycltpXSA+IGFycltpKzFdID4gLi4uID4gYXJyW2Fyci5sZW5ndGggLSAxXVxu57uZ5L2g55Sx5pW05pWw57uE5oiQ55qE5bGx6ISJ5pWw57uEIGFyciDvvIzov5Tlm57ku7vkvZXmu6HotrMgYXJyWzBdIDwgYXJyWzFdIDwgLi4uIGFycltpIC0gMV0gPCBhcnJbaV0gPiBhcnJbaSArIDFdID4gLi4uID4gYXJyW2Fyci5sZW5ndGggLSAxXSDnmoTkuIvmoIcgaSDjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mmFyciA9IFswLDEsMF1cbui+k+WHuu+8mjFcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mmFyciA9IFswLDIsMSwwXVxu6L6T5Ye677yaMVxu56S65L6LIDPvvJpcblxu6L6T5YWl77yaYXJyID0gWzAsMTAsNSwyXVxu6L6T5Ye677yaMVxu56S65L6LIDTvvJpcblxu6L6T5YWl77yaYXJyID0gWzMsNCw1LDFdXG7ovpPlh7rvvJoyXG7npLrkvosgNe+8mlxuXG7ovpPlhaXvvJphcnIgPSBbMjQsNjksMTAwLDk5LDc5LDc4LDY3LDM2LDI2LDE5XVxu6L6T5Ye677yaMlxuXG5cbuaPkOekuu+8mlxuXG4zIDw9IGFyci5sZW5ndGggPD0gMTA0XG4wIDw9IGFycltpXSA8PSAxMDZcbumimOebruaVsOaNruS/neivgSBhcnIg5piv5LiA5Liq5bGx6ISJ5pWw57uEXG5cblxu6L+b6Zi277ya5b6I5a655piT5oOz5Yiw5pe26Ze05aSN5p2C5bqmIE8obikg55qE6Kej5Yaz5pa55qGI77yM5L2g5Y+v5Lul6K6+6K6h5LiA5LiqIE8obG9nKG4pKSDnmoTop6PlhrPmlrnmoYjlkJfvvJ9cblxuXG4qICovXG5mdW5jdGlvbiBwZWFrSW5kZXhJbk1vdW50YWluQXJyYXkoYXJyOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGNvbnN0IGwgPSBhcnIubGVuZ3RoO1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IGwgLSAxO1xuICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgaWYgKGFyclttaWRdIDwgYXJyW21pZCArIDFdKSB7XG4gICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICB9IGVsc2UgaWYgKGFyclttaWRdID4gYXJyW21pZCArIDFdKSB7XG4gICAgICByaWdodCA9IG1pZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdDtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwocGVha0luZGV4SW5Nb3VudGFpbkFycmF5KFswLCAxLCAwXSksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHBlYWtJbmRleEluTW91bnRhaW5BcnJheShbMCwgMiwgMSwgMF0pLCAxKTtcbmFzc2VydC5zdHJpY3RFcXVhbChwZWFrSW5kZXhJbk1vdW50YWluQXJyYXkoWzAsIDEwLCA1LCAyXSksIDEpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBwZWFrSW5kZXhJbk1vdW50YWluQXJyYXkoWzI0LCA2OSwgMTAwLCA5OSwgNzksIDc4LCA2NywgMzYsIDI2LCAxOV0pLFxuICAyXG4pO1xuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICBwZWFrSW5kZXhJbk1vdW50YWluQXJyYXkoWzQwLCA0OCwgNjEsIDc1LCAxMDAsIDk5LCA5OCwgMzksIDMwLCAxMF0pLFxuICA0XG4pO1xuIl19