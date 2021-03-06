/*
颠倒给定的 32 位无符号整数的二进制位。



示例 1：

输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
示例 2：

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。


提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。


进阶:
如果多次调用这个函数，你将如何优化你的算法？
* */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**
 * 由于所有 js 的 数字都是有符号位 但是又没有 无符号左移的操作 所以 这里是不能正确 执行 二进制 末尾 是 1 的数字
 * */
var reverseBits = function (n: number) {
  let result = 0;
  let i = 32; // 共 32位
  while (i--) {
    result <<= 1; // 左移一位
    // n & 1 : 就取 最后一位二进制的数
    // 然后 把最后一位 加到 result 的最左边
    result += n & 1;
    // 右移一位 去掉原来的最后一位
    n >>>= 1;
  }
  return result;
};

var reverseBits2 = function (n: number) {
  return parseInt(
    n.toString(2).padStart(32, "0").split("").reverse().join(""),
    2
  );
};

/**
 * 数学方法 10进制 转 2进制 然后手动操作位数
 * */
var reverseBits3 = function (n: number) {
  let nums = new Array(32).fill(0);
  let count = 0;
  while (n) {
    nums[count] = n % 2;
    count += 1;
    n = Math.trunc(n / 2);
  }
  let num = nums.join("");
  return Number.parseInt(num, 2);
};

import assert from "assert";

assert.strictEqual(reverseBits(1), -2147483648);
