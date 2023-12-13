/**
 * A+B - 4
 * https://www.acmicpc.net/problem/10951
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}
