/**
 * 회의실 배정
 * https://www.acmicpc.net/problem/1931
 */

let [n, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

n = n[0];

arr.sort(function (a, b) {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1,
  cur = 0;

for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);
