/**
 * N과 M (1)
 * https://www.acmicpc.net/problem/15649
 */

let [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = new Array(n).fill(false);
let combo = [];
let answer = "";

function dfs(depth) {
  if (depth > m) return;

  for (let i = 1; i <= n; i++) {
    if (!visited[i - 1]) {
      visited[i - 1] = true;
      combo.push(i);
      if (combo.length === m) answer += combo.join(" ") + "\n";
      dfs(depth + 1);
      combo.pop();
      visited[i - 1] = false;
    }
  }
}

dfs(1);
console.log(answer);
