/**
 * 예산
 * https://www.acmicpc.net/problem/2512
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 1;
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
