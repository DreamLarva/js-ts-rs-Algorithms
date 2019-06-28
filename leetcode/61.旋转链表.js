"use strict";
/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || head.next == null || k === 0)
        return head;
    // 遍历一遍拿到尾节点
    let currentNode = head;
    let l = k;
    let tail;
    while (currentNode != null) {
        tail = currentNode;
        currentNode = currentNode.next;
        l--;
    }
    if (l == 0 || k % (k - l) == 0) {
        return head;
    }
    let newTail;
    // l > 0 需要重新遍历 再找到 newTail 的位置
    if (l > 0) {
        let n = (k - l) - (k % (k - l));
        // 还得再遍历一次
        currentNode = head;
        while (n !== 0) {
            newTail = currentNode;
            currentNode = currentNode.next;
            n--;
        }
    }
    else {
        let n = -l;
        // 还得再遍历一次
        currentNode = head;
        while (n !== 0) {
            newTail = currentNode;
            currentNode = currentNode.next;
            n--;
        }
    }
    tail.next = head;
    const newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([1, 2, 3, 4, 5]), 2).toString(), [4, 5, 1, 2, 3]);
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([0, 1, 2]), 4).toString(), [2, 0, 1]);
assert_1.default.deepStrictEqual(rotateRight(LinkedList_1.createLinkedList([1, 2]), 1).toString(), [2, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEu5peL6L2s6ZO+6KGoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82MS7ml4vovazpk77ooagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTs7Ozs7QUFFSixtREFBOEQ7QUFFOUQ7Ozs7R0FJRztBQUNILElBQUksV0FBVyxHQUFHLFVBQVUsSUFBYyxFQUFFLENBQVM7SUFDakQsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDOUQsWUFBWTtJQUNaLElBQUksV0FBVyxHQUFvQixJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxJQUFlLENBQUM7SUFFcEIsT0FBTyxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3hCLElBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUM7S0FDUDtJQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLE9BQWtCLENBQUM7SUFDdkIsK0JBQStCO0lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEMsVUFBVTtRQUNWLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osT0FBTyxHQUFHLFdBQVksQ0FBQztZQUN2QixXQUFXLEdBQUcsV0FBWSxDQUFDLElBQUksQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQztTQUNQO0tBQ0o7U0FBTTtRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRVgsVUFBVTtRQUNWLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1osT0FBTyxHQUFHLFdBQVksQ0FBQztZQUN2QixXQUFXLEdBQUcsV0FBWSxDQUFDLElBQUksQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQztTQUNQO0tBQ0o7SUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLE9BQU8sT0FBTyxDQUFDO0FBRW5CLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQzdELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNsQixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDdkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNaLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3BELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrpk77ooajvvIzml4vovazpk77ooajvvIzlsIbpk77ooajmr4/kuKroioLngrnlkJHlj7Pnp7vliqjCoGvCoOS4quS9jee9ru+8jOWFtuS4rcKga8Kg5piv6Z2e6LSf5pWw44CCXHJcblxyXG7npLrkvovCoDE6XHJcblxyXG7ovpPlhaU6IDEtPjItPjMtPjQtPjUtPk5VTEwsIGsgPSAyXHJcbui+k+WHujogNC0+NS0+MS0+Mi0+My0+TlVMTFxyXG7op6Pph4o6XHJcbuWQkeWPs+aXi+i9rCAxIOatpTogNS0+MS0+Mi0+My0+NC0+TlVMTFxyXG7lkJHlj7Pml4vovawgMiDmraU6IDQtPjUtPjEtPjItPjMtPk5VTExcclxu56S65L6LwqAyOlxyXG5cclxu6L6T5YWlOiAwLT4xLT4yLT5OVUxMLCBrID0gNFxyXG7ovpPlh7o6IDItPjAtPjEtPk5VTExcclxu6Kej6YeKOlxyXG7lkJHlj7Pml4vovawgMSDmraU6IDItPjAtPjEtPk5VTExcclxu5ZCR5Y+z5peL6L2sIDIg5q2lOiAxLT4yLT4wLT5OVUxMXHJcbuWQkeWPs+aXi+i9rCAzIOatpTrCoDAtPjEtPjItPk5VTExcclxu5ZCR5Y+z5peL6L2sIDQg5q2lOsKgMi0+MC0+MS0+TlVMTFxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcm90YXRlLWxpc3Rcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuXHJcbmltcG9ydCB7TGlzdE5vZGUsIGNyZWF0ZUxpbmtlZExpc3R9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBrXHJcbiAqIEByZXR1cm4ge0xpc3ROb2RlfVxyXG4gKi9cclxudmFyIHJvdGF0ZVJpZ2h0ID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlLCBrOiBudW1iZXIpIHtcclxuICAgIGlmIChoZWFkID09IG51bGwgfHwgaGVhZC5uZXh0ID09IG51bGwgfHwgayA9PT0gMCkgcmV0dXJuIGhlYWQ7XHJcbiAgICAvLyDpgY3ljobkuIDpgY3mi7/liLDlsL7oioLngrlcclxuICAgIGxldCBjdXJyZW50Tm9kZTogbnVsbCB8IExpc3ROb2RlID0gaGVhZDtcclxuICAgIGxldCBsID0gaztcclxuICAgIGxldCB0YWlsITogTGlzdE5vZGU7XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICB0YWlsID0gY3VycmVudE5vZGU7XHJcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xyXG4gICAgICAgIGwtLTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobCA9PSAwIHx8IGsgJSAoayAtIGwpID09IDApIHtcclxuICAgICAgICByZXR1cm4gaGVhZDtcclxuICAgIH1cclxuICAgIGxldCBuZXdUYWlsITogTGlzdE5vZGU7XHJcbiAgICAvLyBsID4gMCDpnIDopoHph43mlrDpgY3ljoYg5YaN5om+5YiwIG5ld1RhaWwg55qE5L2N572uXHJcbiAgICBpZiAobCA+IDApIHtcclxuICAgICAgICBsZXQgbiA9IChrIC0gbCkgLSAoayAlIChrIC0gbCkpO1xyXG5cclxuICAgICAgICAvLyDov5jlvpflho3pgY3ljobkuIDmrKFcclxuICAgICAgICBjdXJyZW50Tm9kZSA9IGhlYWQ7XHJcbiAgICAgICAgd2hpbGUgKG4gIT09IDApIHtcclxuICAgICAgICAgICAgbmV3VGFpbCA9IGN1cnJlbnROb2RlITtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZSEubmV4dDtcclxuICAgICAgICAgICAgbi0tO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG4gPSAtbDtcclxuXHJcbiAgICAgICAgLy8g6L+Y5b6X5YaN6YGN5Y6G5LiA5qyhXHJcbiAgICAgICAgY3VycmVudE5vZGUgPSBoZWFkO1xyXG4gICAgICAgIHdoaWxlIChuICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld1RhaWwgPSBjdXJyZW50Tm9kZSE7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUhLm5leHQ7XHJcbiAgICAgICAgICAgIG4tLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFpbC5uZXh0ID0gaGVhZDtcclxuICAgIGNvbnN0IG5ld0hlYWQgPSBuZXdUYWlsLm5leHQ7XHJcbiAgICBuZXdUYWlsLm5leHQgPSBudWxsO1xyXG4gICAgcmV0dXJuIG5ld0hlYWQ7XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgcm90YXRlUmlnaHQoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNV0pLCAyKSEudG9TdHJpbmcoKSxcclxuICAgIFs0LCA1LCAxLCAyLCAzXSxcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHJvdGF0ZVJpZ2h0KGNyZWF0ZUxpbmtlZExpc3QoWzAsIDEsIDJdKSwgNCkhLnRvU3RyaW5nKCksXHJcbiAgICBbMiwgMCwgMV0sXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICByb3RhdGVSaWdodChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSksIDEpIS50b1N0cmluZygpLFxyXG4gICAgWzIsIDFdLFxyXG4pO1xyXG4iXX0=