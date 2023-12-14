/**
 * 숫자의 개수
 * https://www.acmicpc.net/problem/2577
 */

let [a, b, c] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let mulRes = String(a * b * c)
  .split("")
  .map(Number);

let arr = new Array(10).fill(0);

for (item of mulRes) arr[item]++;

console.log(arr.join("\n"));
