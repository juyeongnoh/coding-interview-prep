/**
 * 공 바꾸기
 * https://www.acmicpc.net/problem/10813
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = new Array(n).fill().map((_, index) => index + 1);

for (let count = 1; count <= m; count++) {
  let [i, j] = input[count].split(" ").map(Number);
  let temp;
  temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

console.log(arr.join(" "));
