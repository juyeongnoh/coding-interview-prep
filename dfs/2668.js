/**
 * 숫자고르기
 * https://www.acmicpc.net/problem/2668
 */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const n = input[0];
const graph = [0, ...input.slice(1)];

const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const cycle = [];

function dfs(curNode) {
  visited[curNode] = true;

  let nextNode = graph[curNode];

  if (!visited[nextNode]) {
    dfs(nextNode);
  } else if (!finished[nextNode]) {
    while (curNode !== nextNode) {
      cycle.push(nextNode);
      nextNode = graph[nextNode];
    }
    cycle.push(curNode);
  }

  finished[curNode] = true;
}

for (let i = 1; i < graph.length - 1; i++) {
  if (!visited[i]) dfs(i);
}

cycle.sort((a, b) => a - b);
console.log(cycle.length);
for (const c of cycle) {
  console.log(c);
}
