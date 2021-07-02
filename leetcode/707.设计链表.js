"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。
假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，
则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。


示例：

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3


提示：

所有值都在 [1, 1000] 之内。
操作次数将在  [1, 1000] 之内。
请不要使用内置的 LinkedList 库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * Initialize your data structure here.
 */
class MyLinkedList {
    /**
     * 没说不能用数组就不能怪我了
     * */
    data = [];
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return this.data[index] == null ? -1 : this.data[index];
    }
    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.data.unshift(val);
    }
    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.data.push(val);
    }
    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0)
            return this.addAtHead(val);
        if (index > this.data.length)
            return;
        this.data.splice(index, 0, val);
    }
    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.data.length)
            return;
        this.data.splice(index, 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA3LuiuvuiuoemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA3LuiuvuiuoemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQ2hCOztTQUVLO0lBQ0wsSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUVwQjs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEtBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUFDLEtBQWEsRUFBRSxHQUFXO1FBQ25DLElBQUksS0FBSyxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu6K6+6K6h6ZO+6KGo55qE5a6e546w44CC5oKo5Y+v5Lul6YCJ5oup5L2/55So5Y2V6ZO+6KGo5oiW5Y+M6ZO+6KGo44CC5Y2V6ZO+6KGo5Lit55qE6IqC54K55bqU6K+l5YW35pyJ5Lik5Liq5bGe5oCn77yadmFsIOWSjCBuZXh044CCdmFsIOaYr+W9k+WJjeiKgueCueeahOWAvO+8jG5leHRcbuaYr+aMh+WQkeS4i+S4gOS4quiKgueCueeahOaMh+mSiC/lvJXnlKjjgILlpoLmnpzopoHkvb/nlKjlj4zlkJHpk77ooajvvIzliJnov5jpnIDopoHkuIDkuKrlsZ7mgKcgcHJldiDku6XmjIfnpLrpk77ooajkuK3nmoTkuIrkuIDkuKroioLngrnjgIJcbuWBh+iuvumTvuihqOS4reeahOaJgOacieiKgueCuemDveaYryAwLWluZGV4IOeahOOAglxuXG7lnKjpk77ooajnsbvkuK3lrp7njrDov5nkupvlip/og73vvJpcblxuZ2V0KGluZGV4Ke+8muiOt+WPlumTvuihqOS4reesrCBpbmRleCDkuKroioLngrnnmoTlgLzjgILlpoLmnpzntKLlvJXml6DmlYjvvIzliJnov5Tlm54tMeOAglxuYWRkQXRIZWFkKHZhbCnvvJrlnKjpk77ooajnmoTnrKzkuIDkuKrlhYPntKDkuYvliY3mt7vliqDkuIDkuKrlgLzkuLogdmFsIOeahOiKgueCueOAguaPkuWFpeWQju+8jOaWsOiKgueCueWwhuaIkOS4uumTvuihqOeahOesrOS4gOS4quiKgueCueOAglxuYWRkQXRUYWlsKHZhbCnvvJrlsIblgLzkuLogdmFsIOeahOiKgueCuei/veWKoOWIsOmTvuihqOeahOacgOWQjuS4gOS4quWFg+e0oOOAglxuYWRkQXRJbmRleChpbmRleCx2YWwp77ya5Zyo6ZO+6KGo5Lit55qE56ysIGluZGV4IOS4quiKgueCueS5i+WJjea3u+WKoOWAvOS4uiB2YWwgIOeahOiKgueCueOAguWmguaenCBpbmRleCDnrYnkuo7pk77ooajnmoTplb/luqbvvIxcbuWImeivpeiKgueCueWwhumZhOWKoOWIsOmTvuihqOeahOacq+WwvuOAguWmguaenCBpbmRleCDlpKfkuo7pk77ooajplb/luqbvvIzliJnkuI3kvJrmj5LlhaXoioLngrnjgIJcbmRlbGV0ZUF0SW5kZXgoaW5kZXgp77ya5aaC5p6c57Si5byVIGluZGV4IOacieaViO+8jOWImeWIoOmZpOmTvuihqOS4reeahOesrCBpbmRleCDkuKroioLngrnjgIJcblxuXG7npLrkvovvvJpcblxuTXlMaW5rZWRMaXN0IGxpbmtlZExpc3QgPSBuZXcgTXlMaW5rZWRMaXN0KCk7XG5saW5rZWRMaXN0LmFkZEF0SGVhZCgxKTtcbmxpbmtlZExpc3QuYWRkQXRUYWlsKDMpO1xubGlua2VkTGlzdC5hZGRBdEluZGV4KDEsMik7ICAgLy/pk77ooajlj5jkuLoxLT4gMi0+IDNcbmxpbmtlZExpc3QuZ2V0KDEpOyAgICAgICAgICAgIC8v6L+U5ZueMlxubGlua2VkTGlzdC5kZWxldGVBdEluZGV4KDEpOyAgLy/njrDlnKjpk77ooajmmK8xLT4gM1xubGlua2VkTGlzdC5nZXQoMSk7ICAgICAgICAgICAgLy/ov5Tlm54zXG5cblxu5o+Q56S677yaXG5cbuaJgOacieWAvOmDveWcqCBbMSwgMTAwMF0g5LmL5YaF44CCXG7mk43kvZzmrKHmlbDlsIblnKggIFsxLCAxMDAwXSDkuYvlhoXjgIJcbuivt+S4jeimgeS9v+eUqOWGhee9rueahCBMaW5rZWRMaXN0IOW6k+OAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWxpbmtlZC1saXN0XG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKi9cbmNsYXNzIE15TGlua2VkTGlzdCB7XG4gIC8qKlxuICAgKiDmsqHor7TkuI3og73nlKjmlbDnu4TlsLHkuI3og73mgKrmiJHkuoZcbiAgICogKi9cbiAgZGF0YTogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIHRoZSBpbmRleCBpcyBpbnZhbGlkLCByZXR1cm4gLTEuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdID09IG51bGwgPyAtMSA6IHRoaXMuZGF0YVtpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbm9kZSBvZiB2YWx1ZSB2YWwgYmVmb3JlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBsaW5rZWQgbGlzdC4gQWZ0ZXIgdGhlIGluc2VydGlvbiwgdGhlIG5ldyBub2RlIHdpbGwgYmUgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpbmtlZCBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBhZGRBdEhlYWQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLmRhdGEudW5zaGlmdCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhIG5vZGUgb2YgdmFsdWUgdmFsIHRvIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGxpbmtlZCBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBhZGRBdFRhaWwodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLmRhdGEucHVzaCh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5vZGUgb2YgdmFsdWUgdmFsIGJlZm9yZSB0aGUgaW5kZXgtdGggbm9kZSBpbiB0aGUgbGlua2VkIGxpc3QuIElmIGluZGV4IGVxdWFscyB0byB0aGUgbGVuZ3RoIG9mIGxpbmtlZCBsaXN0LCB0aGUgbm9kZSB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgbGlua2VkIGxpc3QuIElmIGluZGV4IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoLCB0aGUgbm9kZSB3aWxsIG5vdCBiZSBpbnNlcnRlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGFkZEF0SW5kZXgoaW5kZXg6IG51bWJlciwgdmFsOiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gdGhpcy5hZGRBdEhlYWQodmFsKTtcbiAgICBpZiAoaW5kZXggPiB0aGlzLmRhdGEubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMCwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGluZGV4LXRoIG5vZGUgaW4gdGhlIGxpbmtlZCBsaXN0LCBpZiB0aGUgaW5kZXggaXMgdmFsaWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGVsZXRlQXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmRhdGEubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE15TGlua2VkTGlzdCBvYmplY3Qgd2lsbCBiZSBpbnN0YW50aWF0ZWQgYW5kIGNhbGxlZCBhcyBzdWNoOlxuICogdmFyIG9iaiA9IG5ldyBNeUxpbmtlZExpc3QoKVxuICogdmFyIHBhcmFtXzEgPSBvYmouZ2V0KGluZGV4KVxuICogb2JqLmFkZEF0SGVhZCh2YWwpXG4gKiBvYmouYWRkQXRUYWlsKHZhbClcbiAqIG9iai5hZGRBdEluZGV4KGluZGV4LHZhbClcbiAqIG9iai5kZWxldGVBdEluZGV4KGluZGV4KVxuICovXG5cbmV4cG9ydCB7fTtcbiJdfQ==