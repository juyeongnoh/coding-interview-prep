/**
 * 단어 정렬
 * https://www.acmicpc.net/problem/1181
 * 소요 시간: 15분 06초
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let answer = "";
let arr;

let words = new Set();

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  words.add(input[i]);
}

arr = Array.from(words);

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
});

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
