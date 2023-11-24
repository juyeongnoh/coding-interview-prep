/**
 * 설탕 배달
 * https://www.acmicpc.net/problem/2839
 * 소요 시간: 12분 34초
 */

const fs = require("fs");
let input = Number(fs.readFileSync("dev/stdin").toString());
let answer = 0;

while (input > 0) {
  if (input % 5 === 0) {
    answer += input / 5;
    input %= 5;
  } else {
    input -= 3;
    answer++;
  }
}

if (input < 0) console.log(-1);
else console.log(answer);
