/**
 * 주유소
 * https://www.acmicpc.net/problem/13305
 */

let [n, km, cost] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

n = n[0];

let minValue = cost[0];
let answer = BigInt(0);

for (let i = 0; i < cost.length; i++) {
  if (cost[i] < minValue) minValue = cost[i];
  cost[i] = minValue;
}

for (let i = 0; i < km.length; i++) {
  answer += BigInt(km[i] * cost[i]);
}

console.log(String(answer));
