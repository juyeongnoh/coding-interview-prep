/**
 * N-Queen
 * https://www.acmicpc.net/problem/9663
 */
let n = Number(require("fs").readFileSync("dev/stdin").toString());

let selected = [];
let count = 0;

function isPossible(x, y) {
  for (let [a, b] of selected) {
    if (a == x || b == y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

function recursive(depth) {
  if (depth === n) count++;

  for (let i = 0; i < n; i++) {
    if (!isPossible(depth, i)) continue;
    selected.push([depth, i]);
    recursive(depth + 1);
    selected.pop();
  }
}

recursive(0);
console.log(count);
