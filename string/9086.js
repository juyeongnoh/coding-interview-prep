/**
 * 문자열
 * https://www.acmicpc.net/problem/9086
 */

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  console.log(
    input[i].split("")[0] + input[i].split("")[input[i].split("").length - 1]
  );
}
