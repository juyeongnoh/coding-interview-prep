/**
 * 공 넣기
 * https://www.acmicpc.net/problem/10810
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = new Array(n).fill(0);

for (let count = 1; count <= m; count++) {
  let [i, j, k] = input[count].split(" ").map(Number);
  arr.fill(k, i - 1, j);
}

console.log(arr.join(" "));
