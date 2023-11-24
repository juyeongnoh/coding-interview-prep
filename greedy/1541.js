/**
 * 잃어버린 괄호
 * https://www.acmicpc.net/problem/1541
 * 소요 시간: 10분 48초
 */

const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let answer = 0;

let arr = input.split("-");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i]
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

answer = arr[0];

if (arr.length > 1) {
  for (let i = 1; i < arr.length; i++) {
    answer -= arr[i];
  }
}

console.log(answer);
