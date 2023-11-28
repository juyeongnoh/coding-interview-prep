/**
 * 퇴사
 * https://www.acmicpc.net/submit/14501
 */

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input.slice(1).map((el) => el.split(" ").map(Number));

const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const [duration, profit] = arr[i];
  if (i + duration > n) continue;
  dp[i] += profit;
  for (let j = i + duration; j < n; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}
console.log(Math.max(...dp));
