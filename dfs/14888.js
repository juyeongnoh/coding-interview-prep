/**
 * 연산자 끼워넣기
 * https://www.acmicpc.net/problem/14888
 */
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const countOps = input[2].split(" ").map(Number);

const ops = (() => {
  let res = "";

  for (let i = 0; i < countOps[0]; i++) res += "+";
  for (let i = 0; i < countOps[1]; i++) res += "-";
  for (let i = 0; i < countOps[2]; i++) res += "*";
  for (let i = 0; i < countOps[3]; i++) res += "/";

  return res.split("");
})();

const possibleOpsCombinations = [];
const stack = [];
const visited = new Array(ops.length).fill(false);
const results = [];

function dfs(depth) {
  if (depth >= ops.length) {
    possibleOpsCombinations.push([...stack]);
    return;
  }

  for (let i = 0; i < ops.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    stack.push(ops[i]);
    dfs(depth + 1);
    visited[i] = false;
    stack.pop();
  }
}

dfs(0);

for (const combination of possibleOpsCombinations) {
  let res = 0;

  res += array[0];

  for (let i = 1; i < N; i++) {
    switch (combination[i - 1]) {
      case "+":
        res = res + array[i];
        break;
      case "-":
        res = res - array[i];
        break;
      case "*":
        res = res * array[i];
        break;
      case "/":
        res = div(res, array[i]);
        break;
    }
  }

  results.push(res);
}

function div(a, b) {
  if (a < 0) {
    const absoluteA = Math.abs(a);
    const result = parseInt(absoluteA / b);
    return result - result - result;
  }

  return parseInt(a / b);
}

console.log(Math.max(...results));
console.log(Math.min(...results));
