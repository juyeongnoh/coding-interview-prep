/**
 * 소트인사이드
 * https://www.acmicpc.net/problem/1427
 * 소요 시간: 4분 27초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("");
let answer = "";

input.sort((a, b) => b - a);

for (const item of input) {
  answer += item;
}

console.log(answer);
