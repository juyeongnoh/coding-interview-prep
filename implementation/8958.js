/**
 * OX퀴즈
 * https://www.acmicpc.net/problem/8958
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let answer = "";

for (let i = 1; i <= n; i++) {
  let tc = input[i].split("");
  let score = 0;
  let oCount = 0;

  let temp = tc[0];

  if (temp === "O") {
    oCount++;
    score += oCount;
  }

  for (let j = 1; j < tc.length; j++) {
    if (temp === "O" && tc[j] === "O") {
      oCount++;
      score += oCount;
      temp = tc[j];
    } else if (tc[j] === "O") {
      oCount++;
      score += oCount;
      temp = tc[j];
    } else {
      oCount = 0;
    }
  }

  answer += String(score);
  answer += "\n";
}
console.log(answer);
