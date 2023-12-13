/**
 * 단어 공부
 * https://www.acmicpc.net/problem/1157
 */

let word = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .toUpperCase()
  .trim()
  .split("");

let map = new Map();

for (char of word) {
  if (map.has(char)) {
    map.set(char, map.get(char) + char);
  } else {
    map.set(char, char);
  }
}

let arr = Array.from(map.values()).sort((a, b) => b.length - a.length);

if (arr.length === 1) console.log(arr[0][0]);
else {
  if (arr[0].length === arr[1].length) console.log("?");
  else console.log(arr[0][0]);
}
