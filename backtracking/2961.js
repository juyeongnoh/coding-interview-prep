/**
 * 도영이가 만든 맛있는 음식
 * https://www.acmicpc.net/problem/2961
 */
let [n, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
n = n[0];

const stack = [];
const cases = [];
const differences = [];

const visited = new Array(n).fill(false);

function getCases(depth) {
  if (depth >= n) return;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited.fill(true, 0, i + 1);
      stack.push(i);

      cases.push([...stack]);

      getCases(depth + 1);
      stack.pop();
      visited.fill(false, i);
    }
  }
}

function getDifferences(c) {
  let sour = 1;
  let bitter = 0;

  for (let i = 0; i < c.length; i++) {
    const [s, b] = input[c[i]];
    sour *= s;
    bitter += b;
  }

  differences.push(Math.abs(sour - bitter));
}

getCases(0);

cases.forEach((c) => getDifferences(c));

console.log(Math.min(...differences));
