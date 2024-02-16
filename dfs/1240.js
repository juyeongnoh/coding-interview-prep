/**
 * 노드사이의 거리
 * https://www.acmicpc.net/problem/1240
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
let answer = "";

const graph = Array.from(Array(n), () => new Array(n).fill(0));
let visited = new Array(n).fill(false);

for (let i = 1; i < n; i++) {
  const [from, to, length] = input[i];
  graph[from - 1][to - 1] = length;
  graph[to - 1][from - 1] = length;
}

for (let i = n; i < n + m; i++) {
  const [from, to] = input[i];
  dfs(from - 1, to - 1, 0);
  visited = new Array(n).fill(false);
}

console.log(answer);

function dfs(from, to, length) {
  if (visited[from]) return;
  visited[from] = true;

  if (from === to) {
    answer += length + "\n";
    return;
  }

  for (let i = 0; i < graph[from].length; i++) {
    if (graph[from][i] === 0) continue;
    dfs(i, to, length + graph[from][i]);
  }
}
