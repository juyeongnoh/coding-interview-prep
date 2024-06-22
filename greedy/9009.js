/**
 * 피보나치
 * https://www.acmicpc.net/problem/9009
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

let fib = [0, 1];
let answer = "";

let i = 2;
while (true) {
  let nextNum = fib[i - 1] + fib[i - 2];
  if (nextNum > 1_000_000_000) break;
  fib.push(nextNum);
  i++;
}

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  let result = [];

  while (num) {
    for (let j = fib.length - 1; j > 0; j--) {
      if (fib[j] <= num) {
        result.push(fib[j]);
        num -= fib[j];
      }
    }
  }

  result.reverse();
  answer += result.join(" ") + "\n";
}

console.log(answer);
