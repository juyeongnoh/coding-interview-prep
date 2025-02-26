/**
 * 나이트의 이동
 * https://www.acmicpc.net/problem/7562
 * 완료 시간: 35분
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

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
let i = 1;

while (testCases) {
  const l = Number(input[i]);
  const from = input[i + 1].split(" ").map(Number);
  const to = input[i + 2].split(" ").map(Number);

  const distance = new Array(l).fill().map(() => new Array(l).fill(0));

  console.log(bfs(l, from, to, distance));

  i += 3;
  testCases--;
}

function bfs(l, from, to, distance) {
  const queue = new Queue();
  queue.enqueue([...from]);

  while (queue.getLength() !== 0) {
    const current = queue.dequeue();
    const [currentX, currentY] = current;
    const [targetX, targetY] = to;

    if (currentX === targetX && currentY === targetY) {
      return distance[currentX][currentY];
    }

    const next = [
      [currentX - 1, currentY - 2],
      [currentX - 2, currentY - 1],
      [currentX + 1, currentY - 2],
      [currentX + 2, currentY - 1],
      [currentX + 1, currentY + 2],
      [currentX + 2, currentY + 1],
      [currentX - 1, currentY + 2],
      [currentX - 2, currentY + 1],
    ];

    for (const n of next) {
      const [nX, nY] = n;

      if (nX < 0 || nX >= l || nY < 0 || nY >= l) continue;
      if (distance[nX][nY] > 0) continue;

      queue.enqueue([nX, nY]);
      distance[nX][nY] = distance[currentX][currentY] + 1;
    }
  }
}
