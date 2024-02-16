/**
 * 트리
 * https://www.acmicpc.net/problem/4803
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let answer = "";

for (let i = 0, j = 1; i < input.length; i++, j++) {
  const [n, m] = input[i];

  // [0, 0]을 만나면 종료
  if (n === 0 && m === 0) break;

  // 그래프 만들기
  let graph = Array.from(Array(n + 1), () => []);
  let visited = new Array(n + 1).fill(false);

  for (let j = i + 1; j <= i + m; j++) {
    const [node1, node2] = input[j];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  let treeCount = 0;

  for (let j = 1; j < visited.length; j++) {
    if (visited[j]) continue;
    if (!isCycle(graph, visited, j, 0)) treeCount++;
  }

  if (treeCount === 0) answer += `Case ${j}: No trees.\n`;
  else if (treeCount === 1) answer += `Case ${j}: There is one tree.\n`;
  else answer += `Case ${j}: A forest of ${treeCount} trees.\n`;

  i += m;
}

console.log(answer);

function isCycle(graph, visited, v, prev) {
  visited[v] = true;

  for (let i of graph[v]) {
    if (!visited[i]) {
      if (isCycle(graph, visited, i, v)) return true;
    } else if (i !== prev) return true;
  }
  return false;
}
