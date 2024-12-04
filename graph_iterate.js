// const graph = [[], [2], [1, 3, 5], [2, 4], [3], [2, 6], [5]];
const graph = {
  1: [2],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3],
  5: [2, 6],
  6: [5],
};
const visited = Array(graph.length).fill(false);

function dfs(graph, vertex) {
  console.log(vertex);
  visited[vertex] = true;

  for (const i of graph[vertex]) {
    if (!visited[i]) {
      dfs(graph, i);
    }
  }
}

dfs(graph, 1);
