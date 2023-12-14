/**
 * 너의 평점은
 * https://www.acmicpc.net/problem/25206
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let score = 0;
let credits = 0;

const CRITERIA = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

for (course of input) {
  const [name, credit, grade] = course.split(" ");
  if (grade === "P") continue;
  score += Number(credit) * CRITERIA[grade];
  credits += Number(credit);
}

score /= credits;
console.log(score.toFixed(6));
