const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];
const originalGraph = input.slice(1);

const safeAreaCoords = [];
const combinations = [];

const possibleSafeAreaCounts = [];

// 2차원 배열을 순회하며 모든 빈 칸의 좌표 가져오기
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (originalGraph[y][x] === 0) safeAreaCoords.push([y, x]);
  }
}

// 모든 빈칸의 좌표로 combinations 만들기
const visited = new Array(safeAreaCoords.length + 1).fill(false);
const stack = [];

function dfs(depth) {
  if (depth >= 3) {
    combinations.push([
      safeAreaCoords[stack[0]],
      safeAreaCoords[stack[1]],
      safeAreaCoords[stack[2]],
    ]);
    return;
  }

  for (let i = depth; i < safeAreaCoords.length; i++) {
    if (visited[i]) continue;
    visited.fill(true, 0, i + 1);
    stack.push(i);
    dfs(depth + 1);
    stack.pop();
    visited.fill(false, 0, i + 1);
  }
}

dfs(0);

// DFS를 이용해 모든 경우의 수의 그래프를 만든 다음, countSafeArea()에 넘기기

// 계산한 모든 경우의 수를 그래프에 대입해보고 안전영역 세보기
for (let i = 0; i < combinations.length; i++) {
  let tempGraph = [];

  for (let j = 0; j < originalGraph.length; j++) {
    tempGraph.push([...originalGraph[j]]);
  }

  const [y1, x1] = combinations[i][0];
  const [y2, x2] = combinations[i][1];
  const [y3, x3] = combinations[i][2];

  tempGraph[y1][x1] = 1;
  tempGraph[y2][x2] = 1;
  tempGraph[y3][x3] = 1;

  possibleSafeAreaCounts.push(countSafeArea(tempGraph));

  tempGraph[y1][x1] = 0;
  tempGraph[y2][x2] = 0;
  tempGraph[y3][x3] = 0;
}

// 그래프를 바이러스가 퍼진 상태로 만들고 안전 영역을 세는 함수
function countSafeArea(graph) {
  let safeAreaCount = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (graph[y][x] === 2) spreadVirus(graph, y, x, true);
    }
  }

  function spreadVirus(graph, y, x, isFirst) {
    if (isFirst) {
      if (graph[y][x] === 1) return;
    } else {
      if (graph[y][x] === 1 || graph[y][x] === 2) return;
    }

    graph[y][x] = 2;

    if (y > 0) spreadVirus(graph, y - 1, x, false);
    if (y < N - 1) spreadVirus(graph, y + 1, x, false);
    if (x > 0) spreadVirus(graph, y, x - 1, false);
    if (x < M - 1) spreadVirus(graph, y, x + 1, false);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) safeAreaCount++;
    }
  }

  return safeAreaCount;
}

console.log(Math.max(...possibleSafeAreaCounts));
