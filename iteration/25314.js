/**
 * 코딩은 체육과목 입니다
 * https://www.acmicpc.net/problem/25314
 */

const size = Number(require("fs").readFileSync("dev/stdin").toString());

const longCount = size / 4;

let answer = "";

for (let i = 0; i < longCount; i++) {
  answer += "long ";
}

console.log(answer + "int");
