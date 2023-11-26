/**
 * 수들의 합
 * https://www.acmicpc.net/problem/1789
 */

const fs = require("fs");
let s = Number(fs.readFileSync("dev/stdin").toString());

let acc = 0;
let n = 0;
for (let i = 2; acc < s; i++, n++) {
  acc += i;
}

console.log(n);
