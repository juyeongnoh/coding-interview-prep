/**
 * 단지번호붙이기
 * https://www.acmicpc.net/problem/2667
 */

// 입력값 가공
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
const graph = input.slice(1).map((el) => el.split("").map(Number));

let count;

// 단지 내 집의 수를 담은 배열
// 마지막에 오름차순으로 정렬하여 출력
const housesInDanji = [];

// 방문 여부를 담는 배열 (그래프 크기와 같음)
const visited = Array.from({ length: N }).map(() =>
  Array.from({ length: N }).fill(false)
);

// 그래프 순회
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 현재 위치가 이미 방문했거나 0인 요소는 생략
    if (visited[i][j] || graph[i][j] === 0) continue;
    // 그게 아니라면 (집을 만났다면)
    else {
      // 단지 내 집의 수 세기용 변수 (전역 변수)
      count = 0;

      // DFS 함수로 인접 집의 개수 세기 시작
      dfs(i, j);

      // 개수 세기 끝나면 배열에 추가
      housesInDanji.push(count);
    }
  }
}

// 탐색하는 재귀 함수
function dfs(curY, curX) {
  // 현재 위치가 이미 방문했거나 0인 요소는 생략
  if (visited[curY][curX] || graph[curY][curX] === 0) return;

  // 방문 처리
  visited[curY][curX] = true;

  // 개수 증가
  count++;

  // 상하좌우 탐색
  if (curY > 0) dfs(curY - 1, curX);
  if (curY < N - 1) dfs(curY + 1, curX);
  if (curX > 0) dfs(curY, curX - 1);
  if (curX < N - 1) dfs(curY, curX + 1);
}

// 답 제출
housesInDanji.sort((a, b) => a - b);
console.log(housesInDanji.length);
housesInDanji.forEach((el) => console.log(el));
