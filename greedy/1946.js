/**
 * 신입 사원
 * https://www.acmicpc.net/problem/1946
 */

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const testCase = Number(input[0]);

let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  let n = Number(input[line]);
  let arr = [];

  for (let i = line + 1; i <= line + n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  arr.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let minValue = 100001;

  for (const [x, y] of arr) {
    if (y < minValue) {
      count++;
      minValue = y;
    }
  }

  line += n + 1;

  console.log(count);
}
