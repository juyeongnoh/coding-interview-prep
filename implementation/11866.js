/**
 * 요세푸스 문제 0
 * https://www.acmicpc.net/problem/11866
 */

let [n, k] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = [];
let arr = new Array(n).fill().map((_, index) => index + 1);

let i = 1;

while (arr.length) {
  if (i % k === 0) {
    answer.push(arr.shift());
  } else {
    arr.push(arr.shift());
  }
  i++;
}

console.log(`<${answer.join(", ")}>`);
