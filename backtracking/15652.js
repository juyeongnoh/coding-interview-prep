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

let answer = "";
let selected = [];

function recursive(depth, start) {
  if (depth > m) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = start; i <= n; i++) {
    selected.push(i);
    recursive(depth + 1, i);
    selected.pop();
  }
}

recursive(1, 1);
console.log(answer);
