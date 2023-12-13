/**
 * 문자와 문자열
 * https://www.acmicpc.net/problem/27866
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input[0].split("");
const i = Number(input[1]);
console.log(n[i - 1]);
