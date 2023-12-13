/**
 * 영수증
 * https://www.acmicpc.net/problem/25304
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let total = Number(input[0]);
let kinds = Number(input[1]);

let sum = 0;

for (let i = 2; i < input.length; i++) {
  const [price, count] = input[i].split(" ").map(Number);
  sum += price * count;
}

if (total === sum) console.log("Yes");
else console.log("No");
