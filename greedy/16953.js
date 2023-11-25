/**
 * A → B
 * https://www.acmicpc.net/problem/16953
 */
const fs = require("fs");
let [a, b] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let count = 1;

while (b !== a) {
  if (b <= 0) {
    console.log(-1);
    return;
  }
  if (b % 2 === 0) {
    b /= 2;
  } else {
    b -= 1;
    b /= 10;
  }
  count++;
}

console.log(count);
