// 입력값 가공
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const computerCount = Number(input[0]);
const nodes = Number(input[1]);
const pairs = input.slice(2).map((pair) => pair.split(" ").map(Number));

// 입력 데이터로 그래프 만들기
const graph = Array.from({ length: computerCount + 1 }).map(() => []);

for (let i = 0; i < nodes; i++) {
  const [node1, node2] = pairs[i];
  graph[node1].push(node2);
  graph[node2].push(node1);
}

// 1번 그래프와 연결된 노드 수
let nodeCount = 0;

// 지나온 노드 보관하는 스택
const visited = [];

// DFS 순회 함수
function dfs(graph, currentNode, visited) {
  // 노드 방문 시 nodeCount 증가하고 방문 처리
  nodeCount++;
  visited.push(currentNode);

  // 인접 노드 방문
  for (const nextNode of graph[currentNode]) {
    // 다음 노드가 이미 방문한 노드라면 방문 생략
    if (visited.includes(nextNode)) continue;

    // 다음 노드 방문
    dfs(graph, nextNode, visited);
  }
}

dfs(graph, 1, visited);

console.log(nodeCount - 1);
