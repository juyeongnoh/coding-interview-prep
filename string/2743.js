/**
 * 단어 길이 재기
 * https://www.acmicpc.net/problem/2743
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");
console.log(input.length);
