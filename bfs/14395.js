/**
 * 4연산
 * https://www.acmicpc.net/problem/14395
 */

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.queue[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    const value = this.queue[this.headIndex];
    delete this.queue[this.headIndex];
    this.headIndex++;
    return value;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const queue = new Queue();
const MAX_VALUE = 1000000000;

const [s, t] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

if (s === t) {
  console.log(0);
  return;
}

const visited = new Set([s]);
const result = bfs();

console.log(result ? result : -1);

function bfs() {
  queue.enqueue({ value: s, stack: [] });

  while (queue.getLength() !== 0) {
    const { value, stack } = queue.dequeue();

    if (value > MAX_VALUE) continue;
    if (value === t) return stack.join("");

    for (const nextOp of ["*", "+", "-", "/"]) {
      let nextValue = value;
      if (nextOp === "*") nextValue *= value;
      if (nextOp === "+") nextValue += value;
      if (nextOp === "-") nextValue = 0;
      if (nextOp === "/" && value !== 0) nextValue = 1;

      if (!visited.has(nextValue)) {
        queue.enqueue({ value: nextValue, stack: [...stack, nextOp] });
        visited.add(nextValue);
      }
    }
  }
}
