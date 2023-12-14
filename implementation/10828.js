/**
 * 스택
 * https://www.acmicpc.net/problem/10828
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.trim());

const n = Number(input[0]);
let stack = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  switch (input[i].split(" ")[0]) {
    case "push":
      stack.push(Number(input[i].split(" ")[1]));
      break;
    case "pop":
      if (stack.length) answer += stack.pop() + "\n";
      else answer += "-1\n";
      break;
    case "size":
      answer += stack.length + "\n";
      break;
    case "empty":
      if (stack.length) answer += "0\n";
      else answer += "1\n";
      break;
    case "top":
      if (stack.length) answer += stack[stack.length - 1] + "\n";
      else answer += "-1\n";
      break;
  }
}
console.log(answer);
