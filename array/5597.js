/**
 * 과제 안 내신 분..?
 * https://www.acmicpc.net/problem/5597
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

let arr = new Array(30).fill().map((_, index) => index + 1);

for (let i = 0; i < input.length; i++) {
  arr[input[i] - 1] = 0;
}

let filtered = arr.filter((el) => el !== 0);

for (item of filtered) console.log(item);
