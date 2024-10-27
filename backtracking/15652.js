/**
 * N과 M (4)
 * https://www.acmicpc.net/problem/15652
 */

let [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const stack = [];
let answer = "";

const recursive = (depth, parentNode) => {
  if (depth >= m) {
    answer += stack.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    if (parentNode <= i) {
      stack.push(i + 1);
      recursive(depth + 1, i);
      stack.pop();
    }
  }
};

recursive(0, 0);

console.log(answer);
