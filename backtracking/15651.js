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
let selected = [];

function recursive(depth) {
  if (depth > m) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    recursive(depth + 1);
    selected.pop();
  }
}

recursive(1);
console.log(answer);
