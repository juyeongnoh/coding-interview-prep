/**
 * 경쟁적 전염
 * https://www.acmicpc.net/problem/18405
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

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const graph = input.slice(1, N + 1).map((el) => el.split(" ").map(Number));
const [S, X, Y] = input.at(-1).split(" ").map(Number);

const queue = new Queue();
const coordsList = {};

// 최초 바이러스 좌표
for (let i = 1; i <= K; i++) coordsList[i] = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] !== 0) {
      coordsList[graph[i][j]].push({ x: j, y: i });
    }
  }
}

// 최초 바이러스 좌표 큐에 삽입
for (let i = 1; i <= K; i++) {
  for (let j = 0; j < coordsList[i].length; j++) {
    queue.enqueue({ ...coordsList[i][j], virusNo: i, distance: 0 });
  }
}

while (queue.getLength() !== 0) {
  const {
    x: curX,
    y: curY,
    virusNo: curVirusNo,
    distance: curDistance,
  } = queue.dequeue();

  if (curDistance >= S) continue;

  for (const next of [
    [curY - 1, curX],
    [curY + 1, curX],
    [curY, curX - 1],
    [curY, curX + 1],
  ]) {
    const [nextY, nextX] = next;

    if (
      nextY < 0 ||
      nextY > N - 1 ||
      nextX < 0 ||
      nextX > N - 1 ||
      graph[nextY][nextX] !== 0
    ) {
      continue;
    }

    graph[nextY][nextX] = curVirusNo;

    queue.enqueue({
      x: nextX,
      y: nextY,
      virusNo: curVirusNo,
      distance: curDistance + 1,
    });
  }
}

console.log(graph[X - 1][Y - 1]);
