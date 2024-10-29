/**
 * 바이러스
 * https://www.acmicpc.net/problem/2606
 */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const com = Number(input[0]);

input.splice(0, 2);

const visited = Array(com + 1).fill(false);
const pairs = input.map((el) => el.split(" ").map(Number));

const graph = new Array(com + 1).fill().map(() => []);

pairs.forEach((pair) => {
  const [first, second] = pair;
  graph[first].push(second);
  graph[second].push(first);
});

const stack = [];

function dfs(v) {
  visited[v] = true;
  stack.push(v);

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

dfs(1);

console.log(stack.length - 1);
