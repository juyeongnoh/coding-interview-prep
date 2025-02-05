/**
 * 치킨 배달
 * https://www.acmicpc.net/problem/15686
 */

// 입력값 가공
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((el) => el.split(" ").map(Number));

// 지도 상 집과 치킨집 위치 저장 (ex. [0, 3])
const houses = [];
const chickenHouses = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) houses.push([i, j]);
    else if (graph[i][j] === 2) chickenHouses.push([i, j]);
  }
}

// 치킨집이 최대 M개인 모든 경우의 수의 치킨 거리를 계산해서 chickenDistances에 저장
// 코드 마지막에 Math.min(...chickenDistance)를 출력할 예정
const chickenDistances = [];
const stack = [];

function dfs(chicken) {
  if (stack.length > M) return;
  chickenDistances.push(getTotalDistance(houses, stack));

  for (const c of chicken) {
    if (stack.includes(c)) continue;
    stack.push(c);
    dfs(chicken.slice(chicken.indexOf(c)));
    stack.pop();
  }
}

// 도시의 치킨거리를 구하는 함수 (houses: array, chickenHouses: array)
function getTotalDistance(houses, chickenHouses) {
  let totalDistance = 0;

  // 각 집의 최소 치킨 거리 구하기
  for (const house of houses) {
    const distances = [];

    for (const chicken of chickenHouses) {
      distances.push(getDistance(house[0], house[1], chicken[0], chicken[1]));
    }

    totalDistance += Math.min(...distances);
  }

  return totalDistance;
}

// 거리를 구하는 함수 (| x1 - x2 | + | y1 - y2 |)
function getDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// 연산 시작
dfs(chickenHouses);

// 정답 출력
console.log(Math.min(...chickenDistances));
