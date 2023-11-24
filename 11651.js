/**
 * 좌표 정렬하기 2
 * https://www.acmicpc.net/problem/11651
 * 소요 시간: 4분 33초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let answer = "";

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < arr.length; i++) {
  const [x, y] = arr[i];
  answer += x + " " + y + "\n";
}

console.log(answer);
