/**
 * 세로읽기
 * https://www.acmicpc.net/problem/10798
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

let answer = "";
let length = input.slice();
length.sort((a, b) => b.length - a.length);
length = length[0].length;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i]) answer += input[j][i];
  }
}
console.log(answer);
