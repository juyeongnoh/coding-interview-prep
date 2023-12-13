/**
 * 단어의 개수
 * https://www.acmicpc.net/problem/1152
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .filter((el) => el !== " ")
  .filter((el) => el !== "");

console.log(input.length);
