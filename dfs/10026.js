const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const N = Number(input[0]);
const graph = input.slice(1).map((el) => el.split(""));
let visited = new Array(N).fill().map(() => new Array(N).fill(false));

let nonColorBlind = 0;
let colorBlind = 0;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (visited[y][x]) continue;
    dfs(y, x, graph[y][x]);
    nonColorBlind++;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === "G") graph[i][j] = "R";
  }
}

visited = new Array(N).fill().map(() => new Array(N).fill(false));

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (visited[y][x]) continue;
    dfs(y, x, graph[y][x]);
    colorBlind++;
  }
}

console.log(nonColorBlind, colorBlind);

function dfs(y, x, color) {
  if (visited[y][x] || graph[y][x] !== color) return;
  visited[y][x] = true;

  if (y > 0) dfs(y - 1, x, color);
  if (y < N - 1) dfs(y + 1, x, color);
  if (x > 0) dfs(y, x - 1, color);
  if (x < N - 1) dfs(y, x + 1, color);
}
