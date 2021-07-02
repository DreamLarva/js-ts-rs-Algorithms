"use strict";
/*
[83] 删除排序链表中的重复元素

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/

Tags: algorithms linked-list

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (44.31%)
* Total Accepted: 19.5K
* Total Submissions: 43.9K
* Testcase Example: '[1,1,2]'

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2


示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var deleteDuplicates = function (head) {
    if (head === null)
        return null;
    // 新链表的尾节点
    let tail = head;
    // 正在准备插入的原节点
    let currentNode = head.next;
    while (currentNode !== null) {
        if (currentNode.val !== tail.val) {
            tail.next = currentNode;
            tail = tail.next;
        }
        currentNode = currentNode.next;
    }
    // 保证最后一个 后没有多余的节点
    tail.next = null;
    return head;
};
const { createLinkedList } = require("./util/linked_list");
const linkedList = createLinkedList([1, 1, 2, 3, 3]);
const uniqueLinkedList = deleteDuplicates(linkedList);
console.log(uniqueLinkedList.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMu5Yig6Zmk5o6S5bqP6ZO+6KGo5Lit55qE6YeN5aSN5YWD57SgLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84My7liKDpmaTmjpLluo/pk77ooajkuK3nmoTph43lpI3lhYPntKAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFOztBQUVGOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUNILE1BQU0sUUFBUTtJQUNaLEdBQUcsQ0FBSTtJQUNQLElBQUksQ0FBcUI7SUFFekIsWUFBWSxHQUFNO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLElBQXNCO0lBQ3JELElBQUksSUFBSSxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQixVQUFVO0lBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLGFBQWE7SUFDYixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLE9BQU8sV0FBVyxLQUFLLElBQUksRUFBRTtRQUMzQixJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO0tBQ2hDO0lBQ0Qsa0JBQWtCO0lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDM0QsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxNQUFNLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBRSxDQUFDO0FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5bODNdIOWIoOmZpOaOkuW6j+mTvuihqOS4reeahOmHjeWkjeWFg+e0oFxuXG5odHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZW1vdmUtZHVwbGljYXRlcy1mcm9tLXNvcnRlZC1saXN0L2Rlc2NyaXB0aW9uL1xuXG5UYWdzOiBhbGdvcml0aG1zIGxpbmtlZC1saXN0XG5cbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxuXG4qIGFsZ29yaXRobXNcbiogRWFzeSAoNDQuMzElKVxuKiBUb3RhbCBBY2NlcHRlZDogMTkuNUtcbiogVG90YWwgU3VibWlzc2lvbnM6IDQzLjlLXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICdbMSwxLDJdJ1xuXG7nu5nlrprkuIDkuKrmjpLluo/pk77ooajvvIzliKDpmaTmiYDmnInph43lpI3nmoTlhYPntKDvvIzkvb/lvpfmr4/kuKrlhYPntKDlj6rlh7rnjrDkuIDmrKHjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogMS0+MS0+Mlxu6L6T5Ye6OiAxLT4yXG5cblxu56S65L6LIDI6XG5cbui+k+WFpTogMS0+MS0+Mi0+My0+M1xu6L6T5Ye6OiAxLT4yLT4zXG5cbiovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3Igc2luZ2x5LWxpbmtlZCBsaXN0LlxuICogZnVuY3Rpb24gTGlzdE5vZGUodmFsKSB7XG4gKiAgICAgdGhpcy52YWwgPSB2YWw7XG4gKiAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAqIH1cbiAqL1xuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xuY2xhc3MgTGlzdE5vZGU8VD4ge1xuICB2YWw6IFQ7XG4gIG5leHQ6IG51bGwgfCBMaXN0Tm9kZTxUPjtcblxuICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG59XG5cbnZhciBkZWxldGVEdXBsaWNhdGVzID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlPG51bWJlcj4pIHtcbiAgaWYgKGhlYWQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAvLyDmlrDpk77ooajnmoTlsL7oioLngrlcbiAgbGV0IHRhaWwgPSBoZWFkO1xuICAvLyDmraPlnKjlh4blpIfmj5LlhaXnmoTljp/oioLngrlcbiAgbGV0IGN1cnJlbnROb2RlID0gaGVhZC5uZXh0O1xuICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAoY3VycmVudE5vZGUudmFsICE9PSB0YWlsLnZhbCkge1xuICAgICAgdGFpbC5uZXh0ID0gY3VycmVudE5vZGU7XG4gICAgICB0YWlsID0gdGFpbC5uZXh0O1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gIH1cbiAgLy8g5L+d6K+B5pyA5ZCO5LiA5LiqIOWQjuayoeacieWkmuS9meeahOiKgueCuVxuICB0YWlsLm5leHQgPSBudWxsO1xuICByZXR1cm4gaGVhZDtcbn07XG5cbmNvbnN0IHsgY3JlYXRlTGlua2VkTGlzdCB9ID0gcmVxdWlyZShcIi4vdXRpbC9saW5rZWRfbGlzdFwiKTtcbmNvbnN0IGxpbmtlZExpc3QgPSBjcmVhdGVMaW5rZWRMaXN0KFsxLCAxLCAyLCAzLCAzXSk7XG5jb25zdCB1bmlxdWVMaW5rZWRMaXN0ID0gZGVsZXRlRHVwbGljYXRlcyhsaW5rZWRMaXN0KSE7XG5jb25zb2xlLmxvZyh1bmlxdWVMaW5rZWRMaXN0LnRvU3RyaW5nKCkpO1xuXG5leHBvcnQge307XG4iXX0=