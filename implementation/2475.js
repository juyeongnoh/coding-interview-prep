/**
 * 검증수
 * https://www.acmicpc.net/problem/2475
 */

let serial = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sum = 0;

for (num of serial) sum += num * num;

console.log(sum % 10);
