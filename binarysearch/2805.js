/**
 * 나무 자르기
 * https://www.acmicpc.net/problem/2805
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let trees = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let rest = trees.reduce((acc, cur) => {
    let tree = 0;
    if (cur > mid) tree = cur - mid;
    return acc + tree;
  }, 0);

  if (rest < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
