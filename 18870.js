/**
 * 좌표 압축
 * https://www.acmicpc.net/problem/18870
 * 소요 시간: 28분 45초
 */
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let answer = "";

const n = Number(input[0]);
const myArr = input[1].split(" ").map(Number);
const myUniqArr = [...new Set(myArr)];

myUniqArr.sort((a, b) => a - b);

let myMap = new Map();

for (let i = 0; i < myUniqArr.length; i++) {
  myMap.set(myUniqArr[i], i);
}

for (const item of myArr) {
  answer += myMap.get(item) + " ";
}

console.log(answer);
