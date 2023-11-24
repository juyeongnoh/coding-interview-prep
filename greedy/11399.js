/**
 * ATM
 * https://www.acmicpc.net/problem/11399
 * 소요 시간: 10분 02초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let answer = 0;
let acc = 0;

const n = Number(input[0]);
let queue = input[1].split(" ").map(Number);
queue.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  acc += queue[i];
  answer += acc;
}

console.log(answer);
