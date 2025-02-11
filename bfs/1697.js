/**
 * 숨바꼭질
 * https://www.acmicpc.net/problem/1697
 */
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const MAX = 100001;

const [N, K] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const distances = new Array(MAX).fill(0);

function bfs() {
  const queue = new Queue();
  queue.enqueue(N);

  while (queue.getLength() !== 0) {
    const current = queue.dequeue();

    if (current === K) {
      return distances[current];
    }

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;
      if (distances[next]) continue;

      queue.enqueue(next);
      distances[next] = distances[current] + 1;
    }
  }
}

console.log(bfs());
