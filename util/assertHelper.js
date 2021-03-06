"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortDeep = void 0;
const lodash_1 = __importDefault(require("lodash"));
function sortDeep(arr) {
    step(arr);
    return arr;
    function step(data) {
        if (Array.isArray(data)) {
            data.forEach((data) => step(data));
            data.sort();
        }
    }
}
exports.sortDeep = sortDeep;
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(sortDeep([1, 2, 3]), sortDeep([3, 2, 1]));
assert_1.default.deepStrictEqual(sortDeep([
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 1],
    [2, 1, 3],
    [3, 2, 1],
    [3, 1, 2],
]), sortDeep(lodash_1.default.shuffle([
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 1],
    [2, 1, 3],
    [3, 2, 1],
    [3, 1, 2],
])));
assert_1.default.deepStrictEqual(sortDeep([[7], [2, 2, 3]]), sortDeep([[2, 2, 3], [7]]));
{
    const data = [1, 2, 3];
    const layer1 = new Array(5).fill(0).map(() => lodash_1.default.shuffle(data));
    const sample1 = new Array(5).fill(0).map(() => lodash_1.default.shuffle(layer1));
    const sample2 = new Array(5).fill(0).map(() => lodash_1.default.shuffle(layer1));
    assert_1.default.deepStrictEqual(sortDeep(sample1), sortDeep(sample2));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0SGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJ1dGlsL2Fzc2VydEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBdUI7QUFFdkIsU0FBZ0IsUUFBUSxDQUFDLEdBQVU7SUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxHQUFHLENBQUM7SUFFWCxTQUFTLElBQUksQ0FBQyxJQUFTO1FBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7QUFDSCxDQUFDO0FBVkQsNEJBVUM7QUFFRCxvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFNLENBQUMsZUFBZSxDQUNwQixRQUFRLENBQUM7SUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLEVBQ0YsUUFBUSxDQUNOLGdCQUFDLENBQUMsT0FBTyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1YsQ0FBQyxDQUNILENBQ0YsQ0FBQztBQUVGLGdCQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUvRTtJQUNFLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVsRSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0RGVlcChhcnI6IGFueVtdKSB7XG4gIHN0ZXAoYXJyKTtcbiAgcmV0dXJuIGFycjtcblxuICBmdW5jdGlvbiBzdGVwKGRhdGE6IGFueSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhLmZvckVhY2goKGRhdGEpID0+IHN0ZXAoZGF0YSkpO1xuICAgICAgZGF0YS5zb3J0KCk7XG4gICAgfVxuICB9XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnREZWVwKFsxLCAyLCAzXSksIHNvcnREZWVwKFszLCAyLCAxXSkpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc29ydERlZXAoW1xuICAgIFsxLCAyLCAzXSxcbiAgICBbMSwgMywgMl0sXG4gICAgWzIsIDMsIDFdLFxuICAgIFsyLCAxLCAzXSxcbiAgICBbMywgMiwgMV0sXG4gICAgWzMsIDEsIDJdLFxuICBdKSxcbiAgc29ydERlZXAoXG4gICAgXy5zaHVmZmxlKFtcbiAgICAgIFsxLCAyLCAzXSxcbiAgICAgIFsxLCAzLCAyXSxcbiAgICAgIFsyLCAzLCAxXSxcbiAgICAgIFsyLCAxLCAzXSxcbiAgICAgIFszLCAyLCAxXSxcbiAgICAgIFszLCAxLCAyXSxcbiAgICBdKVxuICApXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnREZWVwKFtbN10sIFsyLCAyLCAzXV0pLCBzb3J0RGVlcChbWzIsIDIsIDNdLCBbN11dKSk7XG5cbntcbiAgY29uc3QgZGF0YSA9IFsxLCAyLCAzXTtcbiAgY29uc3QgbGF5ZXIxID0gbmV3IEFycmF5KDUpLmZpbGwoMCkubWFwKCgpID0+IF8uc2h1ZmZsZShkYXRhKSk7XG4gIGNvbnN0IHNhbXBsZTEgPSBuZXcgQXJyYXkoNSkuZmlsbCgwKS5tYXAoKCkgPT4gXy5zaHVmZmxlKGxheWVyMSkpO1xuICBjb25zdCBzYW1wbGUyID0gbmV3IEFycmF5KDUpLmZpbGwoMCkubWFwKCgpID0+IF8uc2h1ZmZsZShsYXllcjEpKTtcblxuICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnREZWVwKHNhbXBsZTEpLCBzb3J0RGVlcChzYW1wbGUyKSk7XG59XG4iXX0=