/**
 * N 찍기
 * https://www.acmicpc.net/problem/2741
 */

let n = Number(require("fs").readFileSync("dev/stdin").toString());
let answer = "";
for (let i = 0; i < n; i++) answer += String(i + 1) + "\n";
console.log(answer);
