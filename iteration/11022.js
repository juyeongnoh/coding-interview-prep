/**
 * A+B - 8
 * https://www.acmicpc.net/problem/11022
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log("Case #" + i + ": " + a + " + " + b + " = " + (a + b));
}
