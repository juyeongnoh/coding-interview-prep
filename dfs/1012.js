/**
 * 유기농 배추
 * https://www.acmicpc.net/problem/1012
 */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let tc = Number(input[0]);
let line = 1;

function dfs(graph, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  if (graph[x][y] === 1) {
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x, y + 1);
    return true;
  }

  return false;
}

while (tc--) {
  const [m, n, k] = input[line].split(" ").map(Number);
  let answer = 0;
  const graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(new Array(m).fill(0));
  }

  const spots = input
    .slice(line + 1, line + k + 1)
    .map((el) => el.split(" ").map(Number));

  for (const spot of spots) {
    const [x, y] = spot;
    graph[y][x] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }

  line += k + 1;
  console.log(answer);
}
