/**
 * 요세푸스 문제
 * https://www.acmicpc.net/problem/1158
 */
let [n, k] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let queue = new Array(n).fill().map((_, index) => index + 1);
let answer = [];

let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % k === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count++;
}

console.log(`<${answer.join(", ")}>`);
