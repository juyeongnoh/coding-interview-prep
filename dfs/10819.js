/**
 * 차이를 최대로
 * https://www.acmicpc.net/problem/10819
 */
// 입력값 가공
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
const array = input[1].split(" ").map(Number);

// 방문 여부 체크하는 배열
const visited = new Array(N).fill(false);

// 각 노드 방문 시 스택에 적재
const stack = [];

// 모든 가능한 수의 순서를 저장하는 배열
const combinations = [];

// 모든 경우의 수에 대한 결과값 저장하는 배열
const results = [];

// 모든 가능한 수의 순서
function dfs(depth) {
  if (depth >= N) {
    combinations.push([...stack]);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    stack.push(array[i]);
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
    stack.pop();
  }
}

// |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
function compute(combination) {
  let result = 0;

  for (let i = 1; i < N; i++) {
    result += Math.abs(combination[i - 1] - combination[i]);
  }

  return result;
}

dfs(0);

for (let i = 0; i < combinations.length; i++) {
  results.push(compute(combinations[i]));
}

console.log(Math.max(...results));
