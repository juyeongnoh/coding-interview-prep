/**
 * 행렬 덧셈
 * https://www.acmicpc.net/problem/2738
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [n, m] = input.shift();

let answer = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answer += input[i][j] + input[i + n][j] + " ";
  }
  answer += "\n";
}

console.log(answer);
