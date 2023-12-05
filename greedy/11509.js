/**
 * 풍선 맞추기
 * https://www.acmicpc.net/problem/11509
 */

let [n, arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

n = n[0];

let h = new Array(1000000).fill(0);
let answer = 0;

for (const x of arr) {
  h[x]++;
  if (!(h[x + 1] > 0)) {
    answer++;
  }
}

console.log(answer);
