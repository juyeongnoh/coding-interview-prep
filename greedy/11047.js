/**
 * 동전 0
 * https://www.acmicpc.net/problem/11047
 * 소요 시간: 16분 02초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let answer = 0;

let [n, k] = input[0].split(" ").map(Number);
let coins = [...input.slice(1).map(Number)];
coins.sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  if (k >= coins[i]) {
    answer += Math.floor(k / coins[i]);
    k %= coins[i];
  }
}

console.log(answer);
