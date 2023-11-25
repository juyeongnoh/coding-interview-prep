/**
 * 모든 순열
 * https://www.acmicpc.net/problem/10974
 */

const fs = require("fs");
let n = Number(fs.readFileSync("dev/stdin").toString());

let answer = "";
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

function dfs(arr, depth) {
  if (depth === n) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let item of result) answer += item + " ";
    answer += "\n";
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
