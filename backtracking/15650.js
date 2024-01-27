/**
 * N과 M (2)
 * https://www.acmicpc.net/problem/15650
 */

let [n, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "";
let selected = [];
let visited = new Array(n).fill(false);

function recursive(depth) {
  if (depth > m) return;

  for (let i = 1; i <= n; i++) {
    if (!visited[i - 1]) {
      visited.fill(true, 0, i);
      selected.push(i);
      if (selected.length === m) {
        answer += selected.join(" ") + "\n";
      }
      recursive(depth + 1);
      visited.fill(false, 0, i);
      selected.pop();
    }
  }
}

recursive(1);
console.log(answer);
