/**
 * A+B - 5
 * https://www.acmicpc.net/problem/10952
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) return;
  console.log(a + b);
}
