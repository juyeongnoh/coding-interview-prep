/**
 * N과 M (1)
 * https://www.acmicpc.net/problem/15649
 */
const [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const visited = Array.from({ length: n }).fill(false);

let answer = "";
const stack = [];

const dfs = (depth) => {
  if (depth >= m) {
    answer += stack.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      stack.push(i);
      dfs(depth + 1);
      visited[i] = false;
      stack.pop();
    }
  }
};

dfs(0);

console.log(answer);
