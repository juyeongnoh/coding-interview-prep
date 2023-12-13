/**
 * 나머지
 * https://www.acmicpc.net/problem/3052
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let mySet = new Set();

for (item of input) {
  mySet.add(item % 42);
}
console.log(mySet.size);
