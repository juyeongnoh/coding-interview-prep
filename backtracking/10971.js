/**
 * 외판원 순회 2
 * https://www.acmicpc.net/problem/10971
 */
let [n, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

n = n[0];

let visited = new Array(n).fill(false);
let selected = [0];
let cases = [];
let expenses = [];

function recursive(depth) {
  for (let i = 1; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(i);
      if (selected.length === n) {
        selected.push(0);
        cases.push(selected.slice());
        selected.pop();
      }
      recursive(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
}

recursive(0);

cases.forEach((route) => {
  let expense = 0;
  for (let i = 1; i < route.length; i++) {
    if (!input[route[i - 1]][route[i]]) expense = 1e10;
    else expense += input[route[i - 1]][route[i]];
  }
  expenses.push(expense);
});

console.log(Math.min(...expenses));
