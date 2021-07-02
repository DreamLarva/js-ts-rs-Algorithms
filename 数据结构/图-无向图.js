"use strict";
/**
 * 图的实际信息都保存在边上面，因为它们描述了图的结构。
 * 我们很容易像之前提到的那样用二叉树的方式去表示图，这是不对的。
 * 二叉树的表现形式相当固定，一个父节点只能有两个子节点，而图的结构却要灵活得多，一个顶点既可以有一条边，也可以有多条边与它相连。
 *
 * 我们将表示图的边的方法称为邻接表或者邻接表数组。
 * 这种方法将边存储为由顶点的相邻顶点列表构成的数组，并以此顶点作为索引。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
// 图类
class Graph {
    vertices; // 几个端点
    adj = [];
    edges = 0; // 边的数量
    constructor(vertices) {
        this.vertices = vertices;
        for (let i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w); // v 点 能到 w
        this.adj[w].push(v); // w 点 能到 v
        this.edges++;
    }
    showGraph() {
        let output = "";
        for (let i = 0; i < this.vertices; ++i) {
            output = i + " -> ";
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    output += this.adj[i][j] + " ";
                }
            }
            console.log(output);
        }
    }
    // 深度优先搜索
    dfs(v) {
        const marked = Array(this.vertices).fill(false);
        const { adj } = this;
        step(v);
        function step(v) {
            marked[v] = true;
            if (adj[v] !== undefined) {
                console.log("访问了顶点" + v);
            }
            adj[v].forEach((v) => {
                if (v !== "" && !marked[v]) {
                    step(v);
                }
            });
        }
    }
    // 广度优先搜索
    bfs(s) {
        const edgeTo = [];
        const queue = [];
        const marked = Array(this.vertices).fill(false);
        marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            const w = queue.shift();
            if (w !== undefined) {
                console.log("访问了节点 " + w);
            }
            this.adj[w].forEach((v) => {
                if (v !== "" && !marked[v]) {
                    console.log(v, w);
                    edgeTo[v] = w;
                    marked[v] = true;
                    queue.push(v);
                }
            });
        }
        // console.log(edgeTo);
        return { edgeTo, marked };
    }
    // 最短路径
    pathTo(start, end) {
        // 如果是start开始的顶点 返回的edgeTo[start]一定等于undefined
        const { marked, edgeTo } = this.bfs(start);
        if (!marked[end]) {
            // 避免要到达的顶点其实并没有连接
            return undefined;
        }
        const path = [];
        // 一旦路径到达start 说明已经完成即停止循环
        for (let i = end; i != start; i = edgeTo[i]) {
            path.push(i);
        }
        path.push(start);
        return path.reverse();
    }
}
const g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 4);
g.addEdge(3, 5);
g.showGraph();
console.log("深度优先");
g.dfs(0);
console.log("广度优先");
g.bfs(0);
console.log("最短路径");
//    console.log(g.bfs(1,5))
console.log(g.pathTo(4, 5));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5Zu+LeaXoOWQkeWbvi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsi5pWw5o2u57uT5p6EL+Wbvi3ml6DlkJHlm74udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0tBT0s7O0FBRUwsS0FBSztBQUNMLE1BQU0sS0FBSztJQUNULFFBQVEsQ0FBUyxDQUFDLE9BQU87SUFDekIsR0FBRyxHQUFzQixFQUFFLENBQUM7SUFDNUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFDbEIsWUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN0QyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FB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LENBQUMsQ0FBQyxDQUFDO0FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQiw2QkFBNkI7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlm77nmoTlrp7pmYXkv6Hmga/pg73kv53lrZjlnKjovrnkuIrpnaLvvIzlm6DkuLrlroPku6zmj4/ov7Dkuoblm77nmoTnu5PmnoTjgIJcbiAqIOaIkeS7rOW+iOWuueaYk+WDj+S5i+WJjeaPkOWIsOeahOmCo+agt+eUqOS6jOWPieagkeeahOaWueW8j+WOu+ihqOekuuWbvu+8jOi/meaYr+S4jeWvueeahOOAglxuICog5LqM5Y+J5qCR55qE6KGo546w5b2i5byP55u45b2T5Zu65a6a77yM5LiA5Liq54i26IqC54K55Y+q6IO95pyJ5Lik5Liq5a2Q6IqC54K577yM6ICM5Zu+55qE57uT5p6E5Y206KaB54G15rS75b6X5aSa77yM5LiA5Liq6aG254K55pei5Y+v5Lul5pyJ5LiA5p2h6L6577yM5Lmf5Y+v5Lul5pyJ5aSa5p2h6L655LiO5a6D55u46L+e44CCXG4gKlxuICog5oiR5Lus5bCG6KGo56S65Zu+55qE6L6555qE5pa55rOV56ew5Li66YK75o6l6KGo5oiW6ICF6YK75o6l6KGo5pWw57uE44CCXG4gKiDov5nnp43mlrnms5XlsIbovrnlrZjlgqjkuLrnlLHpobbngrnnmoTnm7jpgrvpobbngrnliJfooajmnoTmiJDnmoTmlbDnu4TvvIzlubbku6XmraTpobbngrnkvZzkuLrntKLlvJXjgIJcbiAqICovXG5cbi8vIOWbvuexu1xuY2xhc3MgR3JhcGgge1xuICB2ZXJ0aWNlczogbnVtYmVyOyAvLyDlh6DkuKrnq6/ngrlcbiAgYWRqOiAobnVtYmVyIHwgXCJcIilbXVtdID0gW107XG4gIGVkZ2VzID0gMDsgLy8g6L6555qE5pWw6YePXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzOiBudW1iZXIpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzOyArK2kpIHtcbiAgICAgIHRoaXMuYWRqW2ldID0gW107XG4gICAgICB0aGlzLmFkaltpXS5wdXNoKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkZ2UodjogbnVtYmVyLCB3OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkalt2XS5wdXNoKHcpOyAvLyB2IOeCuSDog73liLAgd1xuICAgIHRoaXMuYWRqW3ddLnB1c2godik7IC8vIHcg54K5IOiDveWIsCB2XG4gICAgdGhpcy5lZGdlcysrO1xuICB9XG5cbiAgc2hvd0dyYXBoKCkge1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlczsgKytpKSB7XG4gICAgICBvdXRwdXQgPSBpICsgXCIgLT4gXCI7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudmVydGljZXM7ICsraikge1xuICAgICAgICBpZiAodGhpcy5hZGpbaV1bal0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb3V0cHV0ICs9IHRoaXMuYWRqW2ldW2pdICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICAgfVxuICB9XG5cbiAgLy8g5rex5bqm5LyY5YWI5pCc57SiXG4gIGRmcyh2OiBudW1iZXIpIHtcbiAgICBjb25zdCBtYXJrZWQgPSBBcnJheSh0aGlzLnZlcnRpY2VzKS5maWxsKGZhbHNlKTtcbiAgICBjb25zdCB7IGFkaiB9ID0gdGhpcztcbiAgICBzdGVwKHYpO1xuXG4gICAgZnVuY3Rpb24gc3RlcCh2OiBudW1iZXIpIHtcbiAgICAgIG1hcmtlZFt2XSA9IHRydWU7XG4gICAgICBpZiAoYWRqW3ZdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLorr/pl67kuobpobbngrlcIiArIHYpO1xuICAgICAgfVxuICAgICAgYWRqW3ZdLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgaWYgKHYgIT09IFwiXCIgJiYgIW1hcmtlZFt2XSkge1xuICAgICAgICAgIHN0ZXAodik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIOW5v+W6puS8mOWFiOaQnOe0olxuICBiZnMoczogbnVtYmVyKSB7XG4gICAgY29uc3QgZWRnZVRvOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IHF1ZXVlOiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IG1hcmtlZCA9IEFycmF5KHRoaXMudmVydGljZXMpLmZpbGwoZmFsc2UpO1xuICAgIG1hcmtlZFtzXSA9IHRydWU7XG4gICAgcXVldWUucHVzaChzKTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB3ID0gcXVldWUuc2hpZnQoKSE7XG4gICAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6/6Zeu5LqG6IqC54K5IFwiICsgdyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkalt3XS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGlmICh2ICE9PSBcIlwiICYmICFtYXJrZWRbdl0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2LCB3KTtcbiAgICAgICAgICBlZGdlVG9bdl0gPSB3O1xuICAgICAgICAgIG1hcmtlZFt2XSA9IHRydWU7XG4gICAgICAgICAgcXVldWUucHVzaCh2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGVkZ2VUbyk7XG4gICAgcmV0dXJuIHsgZWRnZVRvLCBtYXJrZWQgfTtcbiAgfVxuXG4gIC8vIOacgOefrei3r+W+hFxuICBwYXRoVG8oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICAvLyDlpoLmnpzmmK9zdGFydOW8gOWni+eahOmhtueCuSDov5Tlm57nmoRlZGdlVG9bc3RhcnRd5LiA5a6a562J5LqOdW5kZWZpbmVkXG4gICAgY29uc3QgeyBtYXJrZWQsIGVkZ2VUbyB9ID0gdGhpcy5iZnMoc3RhcnQpO1xuXG4gICAgaWYgKCFtYXJrZWRbZW5kXSkge1xuICAgICAgLy8g6YG/5YWN6KaB5Yiw6L6+55qE6aG254K55YW25a6e5bm25rKh5pyJ6L+e5o6lXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgLy8g5LiA5pem6Lev5b6E5Yiw6L6+c3RhcnQg6K+05piO5bey57uP5a6M5oiQ5Y2z5YGc5q2i5b6q546vXG4gICAgZm9yIChsZXQgaSA9IGVuZDsgaSAhPSBzdGFydDsgaSA9IGVkZ2VUb1tpXSkge1xuICAgICAgcGF0aC5wdXNoKGkpO1xuICAgIH1cbiAgICBwYXRoLnB1c2goc3RhcnQpO1xuICAgIHJldHVybiBwYXRoLnJldmVyc2UoKTtcbiAgfVxufVxuXG5jb25zdCBnID0gbmV3IEdyYXBoKDYpO1xuZy5hZGRFZGdlKDAsIDEpO1xuZy5hZGRFZGdlKDAsIDIpO1xuZy5hZGRFZGdlKDEsIDMpO1xuZy5hZGRFZGdlKDEsIDQpO1xuZy5hZGRFZGdlKDIsIDQpO1xuZy5hZGRFZGdlKDMsIDUpO1xuZy5zaG93R3JhcGgoKTtcbmNvbnNvbGUubG9nKFwi5rex5bqm5LyY5YWIXCIpO1xuZy5kZnMoMCk7XG5jb25zb2xlLmxvZyhcIuW5v+W6puS8mOWFiFwiKTtcbmcuYmZzKDApO1xuY29uc29sZS5sb2coXCLmnIDnn63ot6/lvoRcIik7XG4vLyAgICBjb25zb2xlLmxvZyhnLmJmcygxLDUpKVxuY29uc29sZS5sb2coZy5wYXRoVG8oNCwgNSkpO1xuXG5leHBvcnQge307XG4iXX0=