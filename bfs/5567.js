/**
 * 결혼식
 * https://www.acmicpc.net/problem/5567
 * 최초 소요 시간: 22분 49초
 */
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex++] = item;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex++];
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const MAX_FRIEND = 2;

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());

let answer = 0;

const queue = new Queue();
const visited = new Set();

const graph = [];
for (let i = 0; i <= N; i++) {
  graph.push([]);
}

for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

queue.enqueue([1, 0]);

while (queue.getLength() !== 0) {
  const [curNode, curDistance] = queue.dequeue();
  if (visited.has(curNode)) continue;
  if (curDistance <= MAX_FRIEND) answer++;
  visited.add(curNode);

  for (const next of graph[curNode]) {
    queue.enqueue([next, curDistance + 1]);
  }
}

console.log(answer - 1);
