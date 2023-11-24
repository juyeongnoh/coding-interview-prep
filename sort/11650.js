/**
 * 좌표 정렬하기
 * https://www.acmicpc.net/problem/11650
 * 소요 시간: 15분 45초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

const compare = (a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else return a[1] - b[1];
};

arr.sort(compare);

for (let i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(answer);
