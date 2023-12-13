/**
 * 별 찍기 - 2
 * https://www.acmicpc.net/problem/2439
 */

let n = Number(require("fs").readFileSync("dev/stdin").toString());

for (let i = 1; i <= n; i++) {
  let line = "";
  for (j = 0; j < n - i; j++) line += " ";
  for (j = 0; j < i; j++) line += "*";
  console.log(line);
}
