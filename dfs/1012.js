/**
 * 유기농 배추
 * https://www.acmicpc.net/problem/1012
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tc = Number(input.shift());
let testCases = [];

while (input.length !== 0) {
  const [x, y, c] = input[0].split(" ").map(Number);
  testCases.push(input.slice(0, c + 1));
  input = input.slice(c + 1);
}

let count = 0;

function dfs(map, x, y, visited) {
  if (!map[x][y] || visited[x][y]) return;
  count++;
  visited[x][y] = true;

  // 상
  if (y !== 0) dfs(map, x, y - 1, visited);
  // 하
  if (y !== map[0].length - 1) dfs(map, x, y + 1, visited);
  // 좌
  if (x !== 0) dfs(map, x - 1, y, visited);
  // 우
  if (x !== map.length - 1) dfs(map, x + 1, y, visited);
}

testCases.forEach((tc) => {
  const [x, y, c] = tc[0].split(" ").map(Number);
  let map = Array.from(new Array(x), () => new Array(y).fill(0));
  let visited = Array.from(new Array(x), () => new Array(y).fill(false));
  let answer = 0;

  for (let i = 1; i <= c; i++) {
    const [x, y] = tc[i].split(" ").map(Number);
    map[x][y] = 1;
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j <= map[0].length; j++) {
      if (!visited[i][j] || map[i][j]) {
        dfs(map, i, j, visited);
        if (count > 0) {
          answer++;
          count = 0;
        }
      }
    }
  }

  console.log(answer);
});
