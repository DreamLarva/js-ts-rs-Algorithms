/*
有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。

在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。
钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。

最初，除 0 号房间外的其余所有房间都被锁住。

你可以自由地在房间之间来回走动。

如果能进入每个房间返回 true，否则返回 false。

示例 1：

输入: [[1],[2],[3],[]]
输出: true
解释:
我们从 0 号房间开始，拿到钥匙 1。
之后我们去 1 号房间，拿到钥匙 2。
然后我们去 2 号房间，拿到钥匙 3。
最后我们去了 3 号房间。
由于我们能够进入每个房间，我们返回 true。
示例 2：

输入：[[1,3],[3,0,1],[2],[0]]
输出：false
解释：我们不能进入 2 号房间。
提示：

1 <= rooms.length <= 1000
0 <= rooms[i].length <= 1000
所有房间中的钥匙数量总计不超过 3000。
* */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms: number[][]) {
  // bfs
  let list: number[] = [];
  const set: Set<number> = new Set();
  let room_visited = 0;
  list.push(0);
  while (list.length) {
    const room_num = list.shift()!;
    if (set.has(room_num)) continue;

    if (rooms[room_num]) {
      list = list.concat(rooms[room_num]);
      set.add(room_num);
      room_visited++;
    }
  }

  return room_visited === rooms.length;
};

var canVisitAllRooms2 = function (rooms: number[][]) {
  // bfs
  let list: number[] = [];
  const cache: Boolean[] = Array(rooms.length).fill(false);
  let room_visited = 0;
  list.push(0);
  while (list.length) {
    const room_num = list.shift()!;
    if (cache[room_num]) continue;

    if (rooms[room_num]) {
      list = list.concat(rooms[room_num]);
      cache[room_num] = true;
      room_visited++;
    }
  }

  return room_visited === rooms.length;
};

import assert from "assert";

assert.strictEqual(canVisitAllRooms([[1], [2], [3], []]), true);
assert.strictEqual(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]), false);

assert.strictEqual(canVisitAllRooms2([[1], [2], [3], []]), true);
assert.strictEqual(canVisitAllRooms2([[1, 3], [3, 0, 1], [2], [0]]), false);

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

suite
  .add("set", function () {
    canVisitAllRooms([
      [1, 3],
      [3, 0, 1],
      [2],
      [0],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
    ]);
  })
  .add("array", function () {
    canVisitAllRooms2([
      [1, 3],
      [3, 0, 1],
      [2],
      [0],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
      [3, 0, 1],
    ]);
  })

  // add listeners
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });

/**
 * 竟然还是 set 的快那么点......
 * */
