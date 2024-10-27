/**
 * N과 M (2)
 * https://www.acmicpc.net/problem/15650
 */
const [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const visited = new Array(n).fill(false);
const stack = [];
let answer = "";

const recursive = (depth) => {
  if (depth >= m) {
    answer += stack.join(" ") + "\n";
    return;
  }

  for (let i = depth; i < n; i++) {
    if (!visited[i]) {
      visited.fill(true, 0, i + 1);
      stack.push(i + 1);
      recursive(depth + 1);
      visited[i] = false;
      visited.fill(false, i + 1);
      stack.pop();
    }
  }
};

recursive(0);

console.log(answer);
