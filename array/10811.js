/**
 * 바구니 뒤집기
 * https://www.acmicpc.net/problem/10811
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = new Array(n).fill().map((_, index) => index + 1);

for (let idx = 1; idx <= m; idx++) {
  const [i, j] = input[idx].split(" ").map(Number);
  let sliced = arr.slice(i - 1, j);
  sliced.reverse();
  arr.splice(i - 1, j - (i - 1), ...sliced);
}

console.log(arr.join(" "));
