/**
 * 외판원 순회 2
 * https://www.acmicpc.net/problem/10971
 */
let [n, ...graph] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

n = n[0];

const stack = [];
const costs = [];
const routes = [];
const visited = new Array(n).fill(false);

// 가능한 모든 경로를 구하는 함수
// 경로의 처음과 끝은 무조건 0이니 중간 경로만 구한 뒤
// 경로를 저장할 때 스택의 앞과 뒤에 0을 붙여 routes에 저장한다.
function getRoute(depth) {
  if (depth >= n) {
    stack.unshift(0);
    stack.push(0);
    routes.push([...stack]);
    stack.pop();
    stack.shift();
    return;
  }

  for (let i = 1; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      stack.push(i);
      getRoute(depth + 1);
      stack.pop();
      visited[i] = false;
    }
  }
}

// 주어진 경로(수열)에 대해 비용을 구하는 함수
function getCost(route) {
  let cost = 0;

  for (let i = 0; i < route.length - 1; i++) {
    const from = route[i];
    const to = route[i + 1];
    if (graph[from][to] === 0) return;
    cost += graph[from][to];
  }

  costs.push(cost);
}

// 중간상의 경로만 구하기 위해 0이 아닌 1부터 실행한다.
getRoute(1);

// 가능한 모든 경로에 대해 총 비용들을 구한다.
routes.forEach((route) => getCost(route));

// 구한 비용 중 가장 낮은 비용을 출력한다.
console.log(Math.min(...costs));
