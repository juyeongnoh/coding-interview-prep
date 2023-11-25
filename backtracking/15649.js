/**
 * N과 M (1)
 * https://www.acmicpc.net/problem/15649
 */

const fs = require("fs");
let [n, m] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let answer = "";
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

function dfs(arr, depth) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let r of result) answer += r + " ";
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
