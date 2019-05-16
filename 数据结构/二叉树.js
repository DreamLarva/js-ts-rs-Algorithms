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
    constructor(data, left = null, right = null) {
        // 有了计数就不用担心插入两个一样的值的问题(不会增加叶节点,而是增加计数)
        this.count = 1;
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}
class BST {
    constructor() {
        this.root = null;
        this.size = 0;
        // 后序遍历
        this.postOrderAll = function (node) {
            const result = [];
            (function recursion(node) {
                if (!(node === null)) {
                    recursion(node.left);
                    recursion(node.right);
                    result.push(node.data);
                }
            }(node));
            console.log("后序遍历");
            console.log(result);
        };
    }
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
        arr.forEach(v => this.insert(v));
    }
    ;
    // 中序遍历(左字节点>当前节点>右子节点)
    // 效果就是从小到大输出
    inOrder(node) {
        if (!(node === null)) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    ;
    inOrderAll(node) {
        const result = [];
        (function recursion(node) {
            if (!(node === null)) {
                recursion(node.left);
                result.push(node.data);
                recursion(node.right);
            }
        }(node));
        console.log("中序遍历");
        console.log(result);
    }
    ;
    // 先序遍历
    preOrderAll(node) {
        const result = [];
        (function recursion(node) {
            if (!(node === null)) {
                result.push(node.data);
                recursion(node.left);
                recursion(node.right);
            }
        }(node));
        console.log("先序遍历");
        console.log(result);
    }
    ;
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
    ;
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
    ;
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
    ;
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
    ;
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
    ;
    updateArr(arr) {
        arr.forEach(v => this.update(v));
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5LqM5Y+J5qCRLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5LqM5Y+J5qCRLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztLQU9LOztBQUVMLE1BQU07QUFDTixNQUFNLElBQUk7SUFPTixZQUFZLElBQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJO1FBSDlDLHVDQUF1QztRQUN2QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUk7UUFDQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBRUQsTUFBTSxHQUFHO0lBQVQ7UUFDSSxTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBeUVULE9BQU87UUFDUCxpQkFBWSxHQUFHLFVBQVUsSUFBb0I7WUFDekMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxCLENBQUMsU0FBUyxTQUFTLENBQUMsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7WUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7SUE0Rk4sQ0FBQztJQWhMRyxNQUFNLENBQUMsSUFBTztRQUNWLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUNyQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxNQUFNLENBQUM7WUFDWCxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWixPQUFPLElBQUksRUFBRTtnQkFDVCxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUNyQixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO3dCQUNsQixNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzt3QkFDdkIsTUFBTTtxQkFDVDtpQkFDSjtxQkFBTTtvQkFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO3dCQUNsQixNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzt3QkFDeEIsTUFBTTtxQkFDVDtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVE7UUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUYsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixPQUFPLENBQUMsSUFBb0I7UUFDeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixVQUFVLENBQUMsSUFBb0I7UUFDM0IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLENBQUMsU0FBUyxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFFRixPQUFPO0lBQ1AsV0FBVyxDQUFDLElBQW9CO1FBQzVCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixDQUFDLFNBQVMsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtRQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBaUJGLFFBQVE7SUFDUixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ25CLHVDQUF1QztRQUN2QyxJQUFJLElBQUksS0FBSyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBRUYsUUFBUTtJQUNSLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDbkIsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFFRixRQUFRO0lBQ1IsSUFBSSxDQUFDLElBQU87UUFDUixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN2QixPQUFPLE9BQU8sQ0FBQzthQUNsQjtpQkFBTSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzthQUMxQjtpQkFBTSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUMzQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7Ozs7U0FRSztJQUNMLFVBQVUsQ0FBQyxJQUFvQixFQUFFLElBQU87UUFDcEMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEIsV0FBVztZQUNYLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxZQUFZO1lBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsWUFBWTtZQUNaLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNwQjtZQUNELGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7WUFDMUMseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYseUJBQXlCO0lBQ3pCLE1BQU0sQ0FBQyxJQUFPO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksRUFBRTtZQUNOLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsU0FBUyxDQUFDLEdBQVE7UUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0NBQ0w7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLCtCQUErQjtBQUMvQixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXpCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRW5DLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmoJHmmK/kuIDnp43pnZ7nur/mgKfnmoTmlbDmja7nu5PmnoTvvIzku6XliIblsYLnmoTmlrnlvI/lrZjmlbDmja7jgIJcclxuICog5qCR6KKr55So5p2l5a2Y5YKo5YW35pyJ5bGC57qn5YWz57O755qE5pWw5o2u77yM5q+U5aaC5paH5Lu257O757uf5Lit55qE5paH5Lu277ybXHJcbiAqIOagkei/mOiiq+eUqOadpeWtmOWCqOacieW6j+WIl+ihqOOAglxyXG4gKiDpgInmi6nmoJHogIzkuI3mmK/pgqPkupvln7rmnKznmoTmlbDmja7nu5PmnoTvvIzmmK/lm6DkuLrlnKjkuozlj4nmoJHkuIrov5vooYzmn6Xmib7pnZ7luLjlv6vvvIjogIzlnKjpk77ooajkuIrmn6Xmib7liJnkuI3mmK/ov5nmoLfvvInvvIzkuLrkuozlj4nmoJHmt7vliqDmiJbliKDpmaTlhYPntKDkuZ/pnZ7luLjlv6vvvIjogIzlr7nmlbDnu4TmiafooYzmt7vliqDmiJbliKDpmaTmk43kvZzliJnkuI3mmK/ov5nmoLfvvInjgIJcclxuICpcclxuICog5q2k5aSE6Z2e5pCc57Si5LqM5Y+J5qCRXHJcbiAqICovXHJcblxyXG4vLyDoioLngrnnsbtcclxuY2xhc3MgTm9kZTxUID0gYW55PiB7XHJcbiAgICBkYXRhOiBUO1xyXG4gICAgbGVmdDogbnVsbCB8IE5vZGU8VD47XHJcbiAgICByaWdodDogbnVsbCB8IE5vZGU8VD47XHJcbiAgICAvLyDmnInkuoborqHmlbDlsLHkuI3nlKjmi4Xlv4Pmj5LlhaXkuKTkuKrkuIDmoLfnmoTlgLznmoTpl67popgo5LiN5Lya5aKe5Yqg5Y+26IqC54K5LOiAjOaYr+WinuWKoOiuoeaVsClcclxuICAgIGNvdW50ID0gMTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBULCBsZWZ0ID0gbnVsbCwgcmlnaHQgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJTVDxUID0gYW55PiB7XHJcbiAgICByb290OiBudWxsIHwgTm9kZTxUPiA9IG51bGw7XHJcbiAgICBzaXplID0gMDtcclxuXHJcbiAgICBpbnNlcnQoZGF0YTogVCkge1xyXG4gICAgICAgIGNvbnN0IG5ld19ub2RlID0gbmV3IE5vZGUoZGF0YSwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBuZXdfbm9kZTtcclxuICAgICAgICAgICAgKyt0aGlzLnNpemU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IG51bGwgfCBOb2RlPFQ+ID0gdGhpcy5yb290O1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50O1xyXG4gICAgICAgICAgICArK3RoaXMuc2l6ZTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA8IGN1cnJlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmxlZnQgPSBuZXdfbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmlnaHQgPSBuZXdfbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEFycihhcnI6IFRbXSkge1xyXG4gICAgICAgIGFyci5mb3JFYWNoKHYgPT4gdGhpcy5pbnNlcnQodikpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDkuK3luo/pgY3ljoYo5bem5a2X6IqC54K5PuW9k+WJjeiKgueCuT7lj7PlrZDoioLngrkpXHJcbiAgICAvLyDmlYjmnpzlsLHmmK/ku47lsI/liLDlpKfovpPlh7pcclxuICAgIGluT3JkZXIobm9kZTogTm9kZTxUPiB8IG51bGwpIHtcclxuICAgICAgICBpZiAoIShub2RlID09PSBudWxsKSkge1xyXG4gICAgICAgICAgICB0aGlzLmluT3JkZXIobm9kZS5sZWZ0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5pbk9yZGVyKG5vZGUucmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5PcmRlckFsbChub2RlOiBOb2RlPFQ+IHwgbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAoZnVuY3Rpb24gcmVjdXJzaW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKCEobm9kZSA9PT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2lvbihub2RlLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2lvbihub2RlLnJpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0obm9kZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Lit5bqP6YGN5Y6GXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOWFiOW6j+mBjeWOhlxyXG4gICAgcHJlT3JkZXJBbGwobm9kZTogTm9kZTxUPiB8IG51bGwpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgKGZ1bmN0aW9uIHJlY3Vyc2lvbihub2RlKSB7XHJcbiAgICAgICAgICAgIGlmICghKG5vZGUgPT09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaW9uKG5vZGUubGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpb24obm9kZS5yaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KG5vZGUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWFiOW6j+mBjeWOhlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDlkI7luo/pgY3ljoZcclxuICAgIHBvc3RPcmRlckFsbCA9IGZ1bmN0aW9uIChub2RlOiBOb2RlPFQ+IHwgbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICAoZnVuY3Rpb24gcmVjdXJzaW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKCEobm9kZSA9PT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2lvbihub2RlLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaW9uKG5vZGUucmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0obm9kZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ZCO5bqP6YGN5Y6GXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOafpeaJvuacgOWwj+WAvFxyXG4gICAgZ2V0TWluKG5vZGUgPSB0aGlzLnJvb3QpIHtcclxuICAgICAgICAvLyB0cyDov5nph4zliKTmlq0gbm9kZSDnsbvlnovlj6/ku6Xnm7TmjqXkuLogbnVsbCDpnIDopoHpop3lpJbkuIDmrKHnsbvlnovmlq3oqIBcclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g5p+l5om+5pyA5aSn5YC8XHJcbiAgICBnZXRNYXgobm9kZSA9IHRoaXMucm9vdCkge1xyXG4gICAgICAgIC8vIHRzIOi/memHjOWIpOaWrSBub2RlIOexu+Wei+WPr+S7peebtOaOpeS4uiBudWxsIOmcgOimgemineWkluS4gOasoeexu+Wei+aWreiogFxyXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB3aGlsZSAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOafpeaJvue7meWumuWAvFxyXG4gICAgZmluZChkYXRhOiBUKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZGF0YSA9PT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA8IGN1cnJlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhID4gY3VycmVudC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaToioLngrlcclxuICAgICAqIDEuIOWmguaenOiiq+WIoOmZpOeahOiKgueCueayoeacieWPtuiKgueCuSDnm7TmjqXliKDpmaTljbPlj69cclxuICAgICAqIDIuIOWmguaenOiiq+WIoOmZpOeahOiKgueCueacieS4gOS4quWPtuiKgueCuSDpgqPkuYjlsIbooqvliKDpmaTnmoTlj7boioLngrnnmoTllK/kuIDlrZDoioLngrkg5pS+5YiwIOiiq+WIoOmZpOiKgueCueeahOS9jee9rlxyXG4gICAgICogMy4g5aaC5p6c6KKr5Yig6Zmk6IqC54K55pyJ5Lik5Liq5a2Q5Y+26IqC54K5LOacieS4pOenjeWKnuazlTpcclxuICAgICAqICAgICAgMS7osIPmlbTlt6blrZDmoJHnmoTmnIDlpKfoioLngrnliLDlvZPliY3oioLngrlcclxuICAgICAqICAgICAgMi7osIPotKblj7PlrZDmoJHnmoTmnIDlsI/oioLngrnliLDlvZPliY3oioLngrlcclxuICAgICAqICAgICAg6L+Z6YeM6YCJ5oup56ys5LqM56eNXHJcbiAgICAgKiAqL1xyXG4gICAgcmVtb3ZlTm9kZShub2RlOiBOb2RlPFQ+IHwgbnVsbCwgZGF0YTogVCkge1xyXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSA9PT0gbm9kZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIOayoeacieWtkOiKgueCueeahOiKgueCuVxyXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOayoeacieW3puWtkOiKgueCueeahOiKgueCuVxyXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmsqHmnInlj7PlrZDoioLngrnnmoToioLngrlcclxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5ZCM5pe25oul5pyJ5bem5a2Q6IqC54K55ZKM5Y+z5a2Q6IqC54K5XHJcbiAgICAgICAgICAgIC8vIOaJvuWIsOWPs+WtkOagkeeahOacgOWwj+iKgueCuVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wTm9kZSA9IHRoaXMuZ2V0TWluKG5vZGUucmlnaHQpITtcclxuICAgICAgICAgICAgLy8g5omA6KaB5Yig6Zmk55qE6IqC54K555qE5YC85pS55Li6IOWPs+WtkOagkeeahOacgOWwj+iKgueCueeahOWAvFxyXG4gICAgICAgICAgICBub2RlLmRhdGEgPSB0ZW1wTm9kZS5kYXRhO1xyXG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5yZW1vdmVOb2RlKG5vZGUucmlnaHQsIHRlbXBOb2RlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPCBub2RlLmRhdGEpIHtcclxuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5yZW1vdmVOb2RlKG5vZGUubGVmdCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g5pu05paw6IqC54K5IOacieWImeWinuWKoGNvdW50IOayoeacieWwseaPkuWFpeiKgueCuVxyXG4gICAgdXBkYXRlKGRhdGE6IFQpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5maW5kKGRhdGEpO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICsrbm9kZS5jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluc2VydChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZUFycihhcnI6IFRbXSkge1xyXG4gICAgICAgIGFyci5mb3JFYWNoKHYgPT4gdGhpcy51cGRhdGUodikpO1xyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgYnN0ID0gbmV3IEJTVCgpO1xyXG5jb25zdCByYW5kb21BcnIgPSBbNSwgMiwgNSwgMjUsIDU0NSwgMjIxLCA2LCAzLCAxNSwgMTUxLCAyNCwgMTIsIDM0NTIsIDMzXTtcclxuLy8gICAgYnN0Lmluc2VydEFycihyYW5kb21BcnIpO1xyXG5ic3QudXBkYXRlQXJyKHJhbmRvbUFycik7XHJcblxyXG5ic3QuaW5PcmRlckFsbChic3Qucm9vdCk7XHJcbmJzdC5wcmVPcmRlckFsbChic3Qucm9vdCk7XHJcbmJzdC5wb3N0T3JkZXJBbGwoYnN0LnJvb3QpO1xyXG5cclxuY29uc29sZS5sb2coXCJNaW5cIiwgYnN0LmdldE1pbigpIS5kYXRhKTtcclxuY29uc29sZS5sb2coXCJNYXhcIiwgYnN0LmdldE1heCgpIS5kYXRhKTtcclxuXHJcbmNvbnNvbGUubG9nKFwi5p+l5om+57uZ5a6a6IqC54K5XCIsIGJzdC5maW5kKDUpKTtcclxuXHJcbmJzdC5yZW1vdmVOb2RlKGJzdC5yb290LCAxKTtcclxuYnN0LmluT3JkZXJBbGwoYnN0LnJvb3QpO1xyXG5cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19