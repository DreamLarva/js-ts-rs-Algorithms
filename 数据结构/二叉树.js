"use strict";
/**
 * 树是一种非线性的数据结构，以分层的方式存数据。
 * 树被用来存储具有层级关系的数据，比如文件系统中的文件；
 * 树还被用来存储有序列表。
 * 选择树而不是那些基本的数据结构，是因为在二叉树上进行查找非常快（而在链表上查找则不是这样），为二叉树添加或删除元素也非常快（而对数组执行添加或删除操作则不是这样）。
 *
 * 此处非搜索二叉树
 * */
Object.defineProperty(exports, "__esModule", { value: true });
// 节点类
class Node {
    data;
    left;
    right;
    // 有了计数就不用担心插入两个一样的值的问题(不会增加叶节点,而是增加计数)
    count = 1;
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}
class BST {
    root = null;
    size = 0;
    insert(data) {
        const new_node = new Node(data, null, null);
        if (this.root === null) {
            this.root = new_node;
            ++this.size;
        }
        else {
            let current = this.root;
            let parent;
            ++this.size;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = new_node;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent.right = new_node;
                        break;
                    }
                }
            }
        }
    }
    insertArr(arr) {
        arr.forEach((v) => this.insert(v));
    }
    // 中序遍历(左字节点>当前节点>右子节点)
    // 效果就是从小到大输出
    inOrder(node) {
        if (!(node === null)) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    inOrderAll(node) {
        const result = [];
        (function recursion(node) {
            if (!(node === null)) {
                recursion(node.left);
                result.push(node.data);
                recursion(node.right);
            }
        })(node);
        console.log("中序遍历");
        console.log(result);
    }
    // 先序遍历
    preOrderAll(node) {
        const result = [];
        (function recursion(node) {
            if (!(node === null)) {
                result.push(node.data);
                recursion(node.left);
                recursion(node.right);
            }
        })(node);
        console.log("先序遍历");
        console.log(result);
    }
    // 后序遍历
    postOrderAll = function (node) {
        const result = [];
        (function recursion(node) {
            if (!(node === null)) {
                recursion(node.left);
                recursion(node.right);
                result.push(node.data);
            }
        })(node);
        console.log("后序遍历");
        console.log(result);
    };
    // 查找最小值
    getMin(node = this.root) {
        // ts 这里判断 node 类型可以直接为 null 需要额外一次类型断言
        if (node === null)
            return null;
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    // 查找最大值
    getMax(node = this.root) {
        // ts 这里判断 node 类型可以直接为 null 需要额外一次类型断言
        if (node === null)
            return null;
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
    // 查找给定值
    find(data) {
        let current = this.root;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            else if (data < current.data) {
                current = current.left;
            }
            else if (data > current.data) {
                current = current.right;
            }
        }
        return null;
    }
    /**
     * 删除节点
     * 1. 如果被删除的节点没有叶节点 直接删除即可
     * 2. 如果被删除的节点有一个叶节点 那么将被删除的叶节点的唯一子节点 放到 被删除节点的位置
     * 3. 如果被删除节点有两个子叶节点,有两种办法:
     *      1.调整左子树的最大节点到当前节点
     *      2.调账右子树的最小节点到当前节点
     *      这里选择第二种
     * */
    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // 没有子节点的节点
            if (node.left === null && node.right === null) {
                return null;
            }
            // 没有左子节点的节点
            if (node.left === null) {
                return node.right;
            }
            // 没有右子节点的节点
            if (node.right === null) {
                return node.left;
            }
            // 同时拥有左子节点和右子节点
            // 找到右子树的最小节点
            const tempNode = this.getMin(node.right);
            // 所要删除的节点的值改为 右子树的最小节点的值
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    // 更新节点 有则增加count 没有就插入节点
    update(data) {
        const node = this.find(data);
        if (node) {
            ++node.count;
        }
        else {
            this.insert(data);
        }
    }
    updateArr(arr) {
        arr.forEach((v) => this.update(v));
    }
}
const bst = new BST();
const randomArr = [5, 2, 5, 25, 545, 221, 6, 3, 15, 151, 24, 12, 3452, 33];
//    bst.insertArr(randomArr);
bst.updateArr(randomArr);
bst.inOrderAll(bst.root);
bst.preOrderAll(bst.root);
bst.postOrderAll(bst.root);
console.log("Min", bst.getMin().data);
console.log("Max", bst.getMax().data);
console.log("查找给定节点", bst.find(5));
bst.removeNode(bst.root, 1);
bst.inOrderAll(bst.root);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5LqM5Y+J5qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5LqM5Y+J5qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztLQU9LOztBQUVMLE1BQU07QUFDTixNQUFNLElBQUk7SUFDUixJQUFJLENBQUk7SUFDUixJQUFJLENBQWlCO0lBQ3JCLEtBQUssQ0FBaUI7SUFDdEIsdUNBQXVDO0lBQ3ZDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFVixZQUFZLElBQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUVELE1BQU0sR0FBRztJQUNQLElBQUksR0FBbUIsSUFBSSxDQUFDO0lBQzVCLElBQUksR0FBRyxDQUFDLENBQUM7SUFFVCxNQUFNLENBQUMsSUFBTztRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUNyQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxNQUFNLENBQUM7WUFDWCxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWixPQUFPLElBQUksRUFBRTtnQkFDWCxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixJQUFJ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RUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmoJHmmK/kuIDnp43pnZ7nur/mgKfnmoTmlbDmja7nu5PmnoTvvIzku6XliIblsYLnmoTmlrnlvI/lrZjmlbDmja7jgIJcbiAqIOagkeiiq+eUqOadpeWtmOWCqOWFt+acieWxgue6p+WFs+ezu+eahOaVsOaNru+8jOavlOWmguaWh+S7tuezu+e7n+S4reeahOaWh+S7tu+8m1xuICog5qCR6L+Y6KKr55So5p2l5a2Y5YKo5pyJ5bqP5YiX6KGo44CCXG4gKiDpgInmi6nmoJHogIzkuI3mmK/pgqPkupvln7rmnKznmoTmlbDmja7nu5PmnoTvvIzmmK/lm6DkuLrlnKjkuozlj4nmoJHkuIrov5vooYzmn6Xmib7pnZ7luLjlv6vvvIjogIzlnKjpk77ooajkuIrmn6Xmib7liJnkuI3mmK/ov5nmoLfvvInvvIzkuLrkuozlj4nmoJHmt7vliqDmiJbliKDpmaTlhYPntKDkuZ/pnZ7luLjlv6vvvIjogIzlr7nmlbDnu4TmiafooYzmt7vliqDmiJbliKDpmaTmk43kvZzliJnkuI3mmK/ov5nmoLfvvInjgIJcbiAqXG4gKiDmraTlpITpnZ7mkJzntKLkuozlj4nmoJFcbiAqICovXG5cbi8vIOiKgueCueexu1xuY2xhc3MgTm9kZTxUID0gYW55PiB7XG4gIGRhdGE6IFQ7XG4gIGxlZnQ6IG51bGwgfCBOb2RlPFQ+O1xuICByaWdodDogbnVsbCB8IE5vZGU8VD47XG4gIC8vIOacieS6huiuoeaVsOWwseS4jeeUqOaLheW/g+aPkuWFpeS4pOS4quS4gOagt+eahOWAvOeahOmXrumimCjkuI3kvJrlop7liqDlj7boioLngrks6ICM5piv5aKe5Yqg6K6h5pWwKVxuICBjb3VudCA9IDE7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogVCwgbGVmdCA9IG51bGwsIHJpZ2h0ID0gbnVsbCkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbn1cblxuY2xhc3MgQlNUPFQgPSBhbnk+IHtcbiAgcm9vdDogbnVsbCB8IE5vZGU8VD4gPSBudWxsO1xuICBzaXplID0gMDtcblxuICBpbnNlcnQoZGF0YTogVCkge1xuICAgIGNvbnN0IG5ld19ub2RlID0gbmV3IE5vZGUoZGF0YSwgbnVsbCwgbnVsbCk7XG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yb290ID0gbmV3X25vZGU7XG4gICAgICArK3RoaXMuc2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnQ6IG51bGwgfCBOb2RlPFQ+ID0gdGhpcy5yb290O1xuICAgICAgbGV0IHBhcmVudDtcbiAgICAgICsrdGhpcy5zaXplO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgcGFyZW50ID0gY3VycmVudDtcbiAgICAgICAgaWYgKGRhdGEgPCBjdXJyZW50LmRhdGEpIHtcbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJlbnQubGVmdCA9IG5ld19ub2RlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBuZXdfbm9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc2VydEFycihhcnI6IFRbXSkge1xuICAgIGFyci5mb3JFYWNoKCh2KSA9PiB0aGlzLmluc2VydCh2KSk7XG4gIH1cblxuICAvLyDkuK3luo/pgY3ljoYo5bem5a2X6IqC54K5PuW9k+WJjeiKgueCuT7lj7PlrZDoioLngrkpXG4gIC8vIOaViOaenOWwseaYr+S7juWwj+WIsOWkp+i+k+WHulxuICBpbk9yZGVyKG5vZGU6IE5vZGU8VD4gfCBudWxsKSB7XG4gICAgaWYgKCEobm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuaW5PcmRlcihub2RlLmxlZnQpO1xuICAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhKTtcbiAgICAgIHRoaXMuaW5PcmRlcihub2RlLnJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBpbk9yZGVyQWxsKG5vZGU6IE5vZGU8VD4gfCBudWxsKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAoZnVuY3Rpb24gcmVjdXJzaW9uKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIHJlY3Vyc2lvbihub2RlLmxlZnQpO1xuICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xuICAgICAgICByZWN1cnNpb24obm9kZS5yaWdodCk7XG4gICAgICB9XG4gICAgfSkobm9kZSk7XG4gICAgY29uc29sZS5sb2coXCLkuK3luo/pgY3ljoZcIik7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfVxuXG4gIC8vIOWFiOW6j+mBjeWOhlxuICBwcmVPcmRlckFsbChub2RlOiBOb2RlPFQ+IHwgbnVsbCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgKGZ1bmN0aW9uIHJlY3Vyc2lvbihub2RlKSB7XG4gICAgICBpZiAoIShub2RlID09PSBudWxsKSkge1xuICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xuICAgICAgICByZWN1cnNpb24obm9kZS5sZWZ0KTtcbiAgICAgICAgcmVjdXJzaW9uKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH0pKG5vZGUpO1xuICAgIGNvbnNvbGUubG9nKFwi5YWI5bqP6YGN5Y6GXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH1cblxuICAvLyDlkI7luo/pgY3ljoZcbiAgcG9zdE9yZGVyQWxsID0gZnVuY3Rpb24gKG5vZGU6IE5vZGU8VD4gfCBudWxsKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAoZnVuY3Rpb24gcmVjdXJzaW9uKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIHJlY3Vyc2lvbihub2RlLmxlZnQpO1xuICAgICAgICByZWN1cnNpb24obm9kZS5yaWdodCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICB9XG4gICAgfSkobm9kZSk7XG4gICAgY29uc29sZS5sb2coXCLlkI7luo/pgY3ljoZcIik7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgfTtcblxuICAvLyDmn6Xmib7mnIDlsI/lgLxcbiAgZ2V0TWluKG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICAvLyB0cyDov5nph4zliKTmlq0gbm9kZSDnsbvlnovlj6/ku6Xnm7TmjqXkuLogbnVsbCDpnIDopoHpop3lpJbkuIDmrKHnsbvlnovmlq3oqIBcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgd2hpbGUgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyDmn6Xmib7mnIDlpKflgLxcbiAgZ2V0TWF4KG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICAvLyB0cyDov5nph4zliKTmlq0gbm9kZSDnsbvlnovlj6/ku6Xnm7TmjqXkuLogbnVsbCDpnIDopoHpop3lpJbkuIDmrKHnsbvlnovmlq3oqIBcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgd2hpbGUgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIOafpeaJvue7meWumuWAvFxuICBmaW5kKGRhdGE6IFQpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcbiAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJlbnQuZGF0YSA9PT0gZGF0YSkge1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSA8IGN1cnJlbnQuZGF0YSkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgICAgfSBlbHNlIGlmIChkYXRhID4gY3VycmVudC5kYXRhKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDliKDpmaToioLngrlcbiAgICogMS4g5aaC5p6c6KKr5Yig6Zmk55qE6IqC54K55rKh5pyJ5Y+26IqC54K5IOebtOaOpeWIoOmZpOWNs+WPr1xuICAgKiAyLiDlpoLmnpzooqvliKDpmaTnmoToioLngrnmnInkuIDkuKrlj7boioLngrkg6YKj5LmI5bCG6KKr5Yig6Zmk55qE5Y+26IqC54K555qE5ZSv5LiA5a2Q6IqC54K5IOaUvuWIsCDooqvliKDpmaToioLngrnnmoTkvY3nva5cbiAgICogMy4g5aaC5p6c6KKr5Yig6Zmk6IqC54K55pyJ5Lik5Liq5a2Q5Y+26IqC54K5LOacieS4pOenjeWKnuazlTpcbiAgICogICAgICAxLuiwg+aVtOW3puWtkOagkeeahOacgOWkp+iKgueCueWIsOW9k+WJjeiKgueCuVxuICAgKiAgICAgIDIu6LCD6LSm5Y+z5a2Q5qCR55qE5pyA5bCP6IqC54K55Yiw5b2T5YmN6IqC54K5XG4gICAqICAgICAg6L+Z6YeM6YCJ5oup56ys5LqM56eNXG4gICAqICovXG4gIHJlbW92ZU5vZGUobm9kZTogTm9kZTxUPiB8IG51bGwsIGRhdGE6IFQpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgIC8vIOayoeacieWtkOiKgueCueeahOiKgueCuVxuICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8g5rKh5pyJ5bem5a2Q6IqC54K555qE6IqC54K5XG4gICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub2RlLnJpZ2h0O1xuICAgICAgfVxuICAgICAgLy8g5rKh5pyJ5Y+z5a2Q6IqC54K555qE6IqC54K5XG4gICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9kZS5sZWZ0O1xuICAgICAgfVxuICAgICAgLy8g5ZCM5pe25oul5pyJ5bem5a2Q6IqC54K55ZKM5Y+z5a2Q6IqC54K5XG4gICAgICAvLyDmib7liLDlj7PlrZDmoJHnmoTmnIDlsI/oioLngrlcbiAgICAgIGNvbnN0IHRlbXBOb2RlID0gdGhpcy5nZXRNaW4obm9kZS5yaWdodCkhO1xuICAgICAgLy8g5omA6KaB5Yig6Zmk55qE6IqC54K555qE5YC85pS55Li6IOWPs+WtkOagkeeahOacgOWwj+iKgueCueeahOWAvFxuICAgICAgbm9kZS5kYXRhID0gdGVtcE5vZGUuZGF0YTtcbiAgICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgdGVtcE5vZGUuZGF0YSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgPCBub2RlLmRhdGEpIHtcbiAgICAgIG5vZGUubGVmdCA9IHRoaXMucmVtb3ZlTm9kZShub2RlLmxlZnQsIGRhdGEpO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgZGF0YSk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICAvLyDmm7TmlrDoioLngrkg5pyJ5YiZ5aKe5YqgY291bnQg5rKh5pyJ5bCx5o+S5YWl6IqC54K5XG4gIHVwZGF0ZShkYXRhOiBUKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZChkYXRhKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgKytub2RlLmNvdW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc2VydChkYXRhKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBcnIoYXJyOiBUW10pIHtcbiAgICBhcnIuZm9yRWFjaCgodikgPT4gdGhpcy51cGRhdGUodikpO1xuICB9XG59XG5cbmNvbnN0IGJzdCA9IG5ldyBCU1QoKTtcbmNvbnN0IHJhbmRvbUFyciA9IFs1LCAyLCA1LCAyNSwgNTQ1LCAyMjEsIDYsIDMsIDE1LCAxNTEsIDI0LCAxMiwgMzQ1MiwgMzNdO1xuLy8gICAgYnN0Lmluc2VydEFycihyYW5kb21BcnIpO1xuYnN0LnVwZGF0ZUFycihyYW5kb21BcnIpO1xuXG5ic3QuaW5PcmRlckFsbChic3Qucm9vdCk7XG5ic3QucHJlT3JkZXJBbGwoYnN0LnJvb3QpO1xuYnN0LnBvc3RPcmRlckFsbChic3Qucm9vdCk7XG5cbmNvbnNvbGUubG9nKFwiTWluXCIsIGJzdC5nZXRNaW4oKSEuZGF0YSk7XG5jb25zb2xlLmxvZyhcIk1heFwiLCBic3QuZ2V0TWF4KCkhLmRhdGEpO1xuXG5jb25zb2xlLmxvZyhcIuafpeaJvue7meWumuiKgueCuVwiLCBic3QuZmluZCg1KSk7XG5cbmJzdC5yZW1vdmVOb2RlKGJzdC5yb290LCAxKTtcbmJzdC5pbk9yZGVyQWxsKGJzdC5yb290KTtcblxuZXhwb3J0IHt9O1xuIl19