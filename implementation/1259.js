/**
 * 팰린드롬수
 * https://www.acmicpc.net/status?user_id=juyeongnoh&problem_id=1259&from_mine=1
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  let number = input[i].split("");
  let isPalinedrome = "yes";
  for (let j = 0; j < parseInt(number.length / 2); j++) {
    if (number[j] !== number[number.length - 1 - j]) isPalinedrome = "no";
  }
  answer += isPalinedrome + "\n";
}

console.log(answer);
