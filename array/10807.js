/**
 * 개수 세기
 * https://www.acmicpc.net/problem/10807
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const target = Number(input[2]);

const count = arr.filter((el) => el === target);
console.log(count.length);
