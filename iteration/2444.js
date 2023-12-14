/**
 * 별 찍기 - 7
 * https://www.acmicpc.net/problem/2444
 */

let n = Number(require("fs").readFileSync("dev/stdin").toString());
let answer = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - (i + 1); j++) answer += " ";
  for (let j = 1 + i * 2; j > 0; j--) answer += "*";
  answer += "\n";
}

for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j < n - (i + 1); j++) answer += " ";
  for (let j = 1 + i * 2; j > 0; j--) answer += "*";
  answer += "\n";
}

console.log(answer);
