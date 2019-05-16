"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
* */
/**
 * 字母异位词:包含相同数量的相同类型的字母 只是次序不同
 * */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 如果存数组 就初始化 26个0 之后对比
    // 存哈希表 可以存任何字符 不过对比的时候需要对比 key 的数量是否一致
    const map_s = getCharCount(s);
    const map_t = getCharCount(t);
    if (Object.keys(map_s).length !== Object.keys(map_t).length)
        return false;
    for (const [key, value] of Object.entries(map_s)) {
        if (map_t[key] !== value)
            return false;
    }
    return true;
};
function getCharCount(str) {
    return Array.from(str).reduce((res, char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res;
    }, {});
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.ok(isAnagram("anagram", "nagaram"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjQyLuacieaViOeahOWtl+avjeW8guS9jeivjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJO0FBQ0o7O0tBRUs7QUFDTDs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUMxQyx1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMxRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDMUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixTQUFTLFlBQVksQ0FBQyxHQUFXO0lBQzdCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBWSxFQUFFLEVBQUU7UUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQStCLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBR0Qsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4pOS4quWtl+espuS4siBzIOWSjCB0IO+8jOe8luWGmeS4gOS4quWHveaVsOadpeWIpOaWrSB0IOaYr+WQpuaYryBzIOeahOS4gOS4quWtl+avjeW8guS9jeivjeOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IHMgPSBcImFuYWdyYW1cIiwgdCA9IFwibmFnYXJhbVwiXHJcbui+k+WHujogdHJ1ZVxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogcyA9IFwicmF0XCIsIHQgPSBcImNhclwiXHJcbui+k+WHujogZmFsc2Vcclxu6K+05piOOlxyXG7kvaDlj6/ku6XlgYforr7lrZfnrKbkuLLlj6rljIXlkKvlsI/lhpnlrZfmr43jgIJcclxuXHJcbui/m+mYtjpcclxu5aaC5p6c6L6T5YWl5a2X56ym5Liy5YyF5ZCrIHVuaWNvZGUg5a2X56ym5oCO5LmI5Yqe77yf5L2g6IO95ZCm6LCD5pW05L2g55qE6Kej5rOV5p2l5bqU5a+56L+Z56eN5oOF5Ya177yfXHJcbiogKi9cclxuLyoqXHJcbiAqIOWtl+avjeW8guS9jeivjTrljIXlkKvnm7jlkIzmlbDph4/nmoTnm7jlkIznsbvlnovnmoTlrZfmr40g5Y+q5piv5qyh5bqP5LiN5ZCMXHJcbiAqICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzQW5hZ3JhbSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xyXG4gICAgLy8g5aaC5p6c5a2Y5pWw57uEIOWwseWIneWni+WMliAyNuS4qjAg5LmL5ZCO5a+55q+UXHJcbiAgICAvLyDlrZjlk4jluIzooagg5Y+v5Lul5a2Y5Lu75L2V5a2X56ymIOS4jei/h+WvueavlOeahOaXtuWAmemcgOimgeWvueavlCBrZXkg55qE5pWw6YeP5piv5ZCm5LiA6Ie0XHJcbiAgICBjb25zdCBtYXBfcyA9IGdldENoYXJDb3VudChzKTtcclxuICAgIGNvbnN0IG1hcF90ID0gZ2V0Q2hhckNvdW50KHQpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG1hcF9zKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG1hcF90KS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1hcF9zKSkge1xyXG4gICAgICAgIGlmIChtYXBfdFtrZXldICE9PSB2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDaGFyQ291bnQoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHN0cikucmVkdWNlKChyZXMsIGNoYXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJlc1tjaGFyXSA9IHJlc1tjaGFyXSA/IHJlc1tjaGFyXSArIDEgOiAxO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTtcclxufVxyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0Lm9rKGlzQW5hZ3JhbShcImFuYWdyYW1cIiwgXCJuYWdhcmFtXCIpKTtcclxuIl19