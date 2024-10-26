/**
 * N과 M (1)
 * https://www.acmicpc.net/problem/15649
 */
let [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const visited = new Array(n).fill(false);

const answer = [];

const recursive = (num) => {
  if (answer.length >= m) {
    console.log(answer.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      answer.push(i + 1);
      recursive(i + 1);
      visited[i] = false;
      answer.pop();
    }
  }
};

recursive(0);
