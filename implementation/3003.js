/**
 * 킹, 퀸, 룩, 비숍, 나이트, 폰
 * https://www.acmicpc.net/problem/3003
 */

let [king, queen, rook, bishop, knight, pawn] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(1 - king, 1 - queen, 2 - rook, 2 - bishop, 2 - knight, 8 - pawn);
