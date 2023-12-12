/**
 * 그룹 단어 체커
 * https://www.acmicpc.net/problem/1316
 */

let [n, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

for (let word of arr) {
  if (isGroup(word)) answer++;
}

console.log(answer);

function isGroup(word) {
  let letters = new Set();
  let prev;

  let breakdown = word.split("");

  for (const letter of breakdown) {
    if (letters.has(letter) && prev !== letter) return false;
    letters.add(letter);
    prev = letter;
  }

  return true;
}
