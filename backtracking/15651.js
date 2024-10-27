/**
 * N과 M (3)
 * https://www.acmicpc.net/problem/15651
 */

let [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "";
const stack = [];

const recursive = (num) => {
  if (num >= m) {
    answer += stack.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < n; i++) {
    stack.push(i + 1);
    recursive(num + 1);
    stack.pop();
  }
};

recursive(0);

console.log(answer);
