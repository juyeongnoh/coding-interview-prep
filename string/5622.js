/**
 * 다이얼
 * https://www.acmicpc.net/problem/5622
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

let answer = 0;

const mapping = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

for (letter of input) {
  let num;
  for (map of mapping) {
    if (map.includes(letter)) {
      num = mapping.indexOf(map);
      break;
    }
  }
  answer += num + 2;
}

console.log(answer + input.length);
