/**
 * 텀 프로젝트
 * https://www.acmicpc.net/problem/9466
 */
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const testCase = Number(input[0]);

for (let i = 1; i < testCase * 2; i += 2) {
  const n = Number(input[i]);
  const graph = [0, ...input[i + 1].split(" ").map(Number)];

  const visited = new Array(n + 1).fill(false);
  const processed = new Array(n + 1).fill(false);
  const cycle = [];

  for (let i = 1; i <= n; i++) {
    dfs(graph, i, visited, processed, cycle);
  }
  console.log(n - cycle.length);
}

function dfs(graph, curNode, visited, processed, cycle) {
  visited[curNode] = true;

  let nextNode = graph[curNode];

  if (!visited[nextNode]) {
    dfs(graph, nextNode, visited, processed, cycle);
  } else if (!processed[nextNode]) {
    while (nextNode !== curNode) {
      cycle.push(nextNode);
      nextNode = graph[nextNode];
    }
    cycle.push(nextNode);
  }

  processed[curNode] = true;
}
