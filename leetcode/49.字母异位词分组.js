"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
* */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const primeFloatArr = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        89,
        97,
        103,
        109,
        113,
        127,
    ];
    const cache = {};
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === "") {
            if (cache[""]) {
                cache[""].push(strs[i]);
            }
            else {
                cache[""] = [strs[i]];
            }
            continue;
        }
        const hash = strs[i]
            .split("")
            .map(v => primeFloatArr[v.charCodeAt(0) - 97])
            .reduce((pre, cur) => pre * cur);
        if (cache[hash]) {
            cache[hash].push(strs[i]);
        }
        else {
            cache[hash] = [strs[i]];
        }
    }
    console.log(cache);
    return Object.values(cache);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDku5a2X5q+N5byC5L2N6K+N5YiG57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS80OS7lrZfmr43lvILkvY3or43liIbnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsSUFBYztJQUN4QyxNQUFNLGFBQWEsR0FBRztRQUNsQixDQUFDO1FBQ0QsQ0FBQztRQUNELENBQUM7UUFDRCxDQUFDO1FBQ0QsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0YsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNOLENBQUM7SUFFRixNQUFNLEtBQUssR0FBRyxFQUFpQyxDQUFDO0lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDWCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsU0FBUztTQUNaO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNmLEtBQUssQ0FBQyxFQUFFLENBQUM7YUFDVCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUM3QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtLQUNKO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFaEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a2X56ym5Liy5pWw57uE77yM5bCG5a2X5q+N5byC5L2N6K+N57uE5ZCI5Zyo5LiA6LW344CC5a2X5q+N5byC5L2N6K+N5oyH5a2X5q+N55u45ZCM77yM5L2G5o6S5YiX5LiN5ZCM55qE5a2X56ym5Liy44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IFtcImVhdFwiLCBcInRlYVwiLCBcInRhblwiLCBcImF0ZVwiLCBcIm5hdFwiLCBcImJhdFwiXSxcclxu6L6T5Ye6OlxyXG5bXHJcbiAgW1wiYXRlXCIsXCJlYXRcIixcInRlYVwiXSxcclxuICBbXCJuYXRcIixcInRhblwiXSxcclxuICBbXCJiYXRcIl1cclxuXVxyXG7or7TmmI7vvJpcclxuXHJcbuaJgOaciei+k+WFpeWdh+S4uuWwj+WGmeWtl+avjeOAglxyXG7kuI3ogIPomZHnrZTmoYjovpPlh7rnmoTpobrluo/jgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gc3Ryc1xyXG4gKiBAcmV0dXJuIHtzdHJpbmdbXVtdfVxyXG4gKi9cclxudmFyIGdyb3VwQW5hZ3JhbXMgPSBmdW5jdGlvbiAoc3Ryczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHByaW1lRmxvYXRBcnIgPSBbXHJcbiAgICAgICAgMixcclxuICAgICAgICAzLFxyXG4gICAgICAgIDUsXHJcbiAgICAgICAgNyxcclxuICAgICAgICAxMSxcclxuICAgICAgICAxMyxcclxuICAgICAgICAxNyxcclxuICAgICAgICAxOSxcclxuICAgICAgICAyMyxcclxuICAgICAgICAyOSxcclxuICAgICAgICAzMSxcclxuICAgICAgICA0MSxcclxuICAgICAgICA0MyxcclxuICAgICAgICA0NyxcclxuICAgICAgICA1MyxcclxuICAgICAgICA1OSxcclxuICAgICAgICA2MSxcclxuICAgICAgICA2NyxcclxuICAgICAgICA3MSxcclxuICAgICAgICA3MyxcclxuICAgICAgICA4OSxcclxuICAgICAgICA5NyxcclxuICAgICAgICAxMDMsXHJcbiAgICAgICAgMTA5LFxyXG4gICAgICAgIDExMyxcclxuICAgICAgICAxMjcsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGNhY2hlID0ge30gYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0cnNbaV0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNhY2hlW1wiXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtcIlwiXS5wdXNoKHN0cnNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FjaGVbXCJcIl0gPSBbc3Ryc1tpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBzdHJzW2ldXHJcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxyXG4gICAgICAgICAgICAubWFwKHYgPT4gcHJpbWVGbG9hdEFyclt2LmNoYXJDb2RlQXQoMCkgLSA5N10pXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKiBjdXIpO1xyXG5cclxuICAgICAgICBpZiAoY2FjaGVbaGFzaF0pIHtcclxuICAgICAgICAgICAgY2FjaGVbaGFzaF0ucHVzaChzdHJzW2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWNoZVtoYXNoXSA9IFtzdHJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhjYWNoZSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjYWNoZSk7XHJcblxyXG59O1xyXG5cclxuLy8gY29uc29sZS5sb2coZ3JvdXBBbmFncmFtcyhbXCJhbmRcIiwgXCJkYW5cIl0pKVxyXG4vLyBjb25zb2xlLmxvZyhncm91cEFuYWdyYW1zKFtcImVhdFwiLCBcInRlYVwiLCBcInRhblwiLCBcImF0ZVwiLCBcIm5hdFwiLCBcImJhdFwiXSkpXHJcblxyXG5leHBvcnQge31cclxuIl19