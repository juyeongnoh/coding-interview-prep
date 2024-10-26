/**
 * 듣보잡
 * https://www.acmicpc.net/problem/1764
 */

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
input.splice(0, 1);

let 듣보 = 0;
let answer = "";

input.sort();

for (let i = 1; i < input.length; i++) {
  if (input[i] === input[i - 1]) {
    듣보++;
    answer += `${input[i]}\n`;
  }
}

console.log(듣보);
console.log(answer);
