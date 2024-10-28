const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [r, c] = input[0].split(" ").map(Number);
input.shift();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = new Set();
let maxDepth = 0;

let count = 0;
function recursive(depth, currentX, currentY) {
  count++;
  maxDepth = Math.max(maxDepth, depth);

  for (let i = 0; i < 4; i++) {
    const nextX = currentX + dx[i];
    const nextY = currentY + dy[i];
    if (nextX < 0 || nextX >= r || nextY < 0 || nextY >= c) continue;
    if (visited.has(input[nextX][nextY])) continue;
    visited.add(input[nextX][nextY]);
    recursive(depth + 1, nextX, nextY);
    visited.delete(input[nextX][nextY]);
  }
}

visited.add(input[0][0]);
recursive(1, 0, 0);

console.log(maxDepth);
