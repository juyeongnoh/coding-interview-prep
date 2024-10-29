graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = new Array(graph.length).fill(false);

function dfs(graph, v) {
  visited[v] = true;
  console.log(v);
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i);
    }
  }
}

dfs(graph, 1);
