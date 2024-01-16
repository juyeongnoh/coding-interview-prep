/**
 * 랜선 자르기
 * https://www.acmicpc.net/problem/1654
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [k, n] = input[0].split(" ").map(Number);
input.shift();
input = input.map(Number);

let start = 1;
let end = Math.max(...input);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (cable of input) total += parseInt(cable / mid);
  if (total < n) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
