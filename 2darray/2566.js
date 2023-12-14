/**
 * 최댓값
 * https://www.acmicpc.net/problem/2566
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let maxValues = [];
let maxColumn;
let maxRow;

for (let i = 0; i < 9; i++) {
  maxValues.push(Math.max(...input[i]));
}

maxRow = maxValues.indexOf(Math.max(...maxValues));
maxColumn = input[maxRow].indexOf(Math.max(...maxValues));

console.log(input[maxRow][maxColumn]);
console.log(maxRow + 1, maxColumn + 1);
