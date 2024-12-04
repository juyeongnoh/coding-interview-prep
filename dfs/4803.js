/**
 * 트리
 * https://www.acmicpc.net/problem/4803
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const graphs = [];
let treeCount = 0;

// 그래프 만들기
for (let i = 0; i < input.length; ) {
  const [n, m] = input[i];
  if (n === 0 && m === 0) break;

  const edges = input.slice(i + 1, i + m + 1);

  i += m + 1;

  graphs.push(makeGraph(n, edges));
}

function makeGraph(n, edges) {
  let graph = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (const edge of edges) {
    const [vertex1, vertex2] = edge;
    graph[vertex1].push(vertex2);
    graph[vertex2].push(vertex1);
  }

  return graph;
}

// 그래프에 트리가 몇개 존재하는지 확인하기
for (let i = 0; i < graphs.length; i++) {
  const count = countTree(graphs[i]);

  switch (count) {
    case 0:
      console.log(`Case ${i + 1}: No trees.`);
      break;
    case 1:
      console.log(`Case ${i + 1}: There is one tree.`);
      break;
    default:
      console.log(`Case ${i + 1}: A forest of ${count} trees.`);
      break;
  }
}

function countTree(graph) {
  treeCount = 0;

  const nodeCount = Object.keys(graph).length;
  const visited = Array.from({ length: nodeCount }).fill(0);
  let countVisitedNodes = 0;

  for (let i = 1; i <= nodeCount; i++) {
    if (visited[i - 1]) continue;
    dfs(i, graph, visited);

    const visitedNodes = visited.filter((el) => el !== 0);

    if (countVisitedNodes !== visitedNodes.length) {
      treeCount++;
      countVisitedNodes = visitedNodes.length;
    }

    if (visitedNodes.some((el) => el >= 3)) {
      treeCount--;
    }
  }

  return treeCount;
}

// [2, 3, 1, 3, 0, 0][(4, 6, 2, 6, 0, 0)];

// 단순 visited 배열이 아니라
// 노드의 방문 횟수를 기록하는 배열
// 방문 횟수가 하나라도 3보다 높다면 사이클이 있는 것

// 트리 세기

// for 노드의 수
// visited 배열에 값이 0이면 treeCount++

// 사이클이 있으면 트리 아님

// 그래프 순회
function dfs(startNode, graph, visited) {
  visited[startNode - 1]++;

  for (const v of graph[startNode]) {
    if (visited[v - 1]) visited[v - 1]++;
    else {
      dfs(v, graph, visited);
    }
  }
}
