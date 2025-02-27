/**
 * 특정 거리의 도시 찾기
 * https://www.acmicpc.net/problem/18352
 * 최초 소요 시간: 30분 28초
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

// 입력값 가공
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((el) => el.split(" ").map(Number));

// X부터 모든 노드까지의 거리
const distances = new Array(N + 1).fill(1e6);
const visited = new Array(N + 1).fill(false);

// 그래프
const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

edges.forEach(([from, to]) => {
  graph[from].push(to);
});

// 시작 도시 enqueue
const queue = new Queue();

// enqueue할 때 노드와 거리 쌍으로 추가
queue.enqueue([X, 0]);

// 매 노드를 방문할 때마다 distances 배열 업데이트
while (queue.getLength() !== 0) {
  const [curNode, curDistance] = queue.dequeue();
  visited[curNode] = true;

  distances[curNode] =
    distances[curNode] > curDistance ? curDistance : distances[curNode];

  for (const next of graph[curNode]) {
    if (visited[next]) continue;
    queue.enqueue([next, curDistance + 1]);
  }
}

let answer = "";

for (let i = 0; i < distances.length; i++) {
  if (distances[i] === K) answer += i + "\n";
}

console.log(answer ? answer : -1);
