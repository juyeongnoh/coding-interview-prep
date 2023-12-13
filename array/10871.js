/**
 * X보다 작은 수
 * https://www.acmicpc.net/problem/10871
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const filtered = arr.filter((el) => el < x);

console.log(filtered.join(" "));
