/**
 * 바이러스
 * https://www.acmicpc.net/problem/2606
 */

let [coms, pairs, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => (el.length > 1 ? el.split(" ").map(Number) : Number(el)));

let graph = [];
let visited = new Array(coms + 1).fill(false);
let count = 0;

for (let i = 0; i <= coms; i++) {
  graph.push([]);
}

for (const pair of input) {
  const [node1, node2] = pair;
  graph[node1].push(node2);
  graph[node2].push(node1);
}

function dfs(graph, v, visited) {
  visited[v] = true;
  count++;
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);
console.log(count - 1);
