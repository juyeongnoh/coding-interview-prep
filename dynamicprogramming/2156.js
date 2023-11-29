// 연속으로 놓여있는 3잔을 모두 마실 수는 없다.
// 꼭 두 잔 연속으로 마실 필요는 없음

let [n, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solve(n, arr) {
  if (n === 1) return arr[0];
  else if (n === 2) return arr[0] + arr[1];
  const dp = new Array(n).fill(0);
  dp[1] = arr[0];
  dp[2] = arr[0] + arr[1];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + arr[i - 2] + arr[i - 1],
      dp[i - 2] + arr[i - 1],
      dp[i - 1]
    );
  }
  return dp[n];
}

console.log(solve(n, arr));
