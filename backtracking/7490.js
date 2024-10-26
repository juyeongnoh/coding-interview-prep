/**
 * 0 만들기
 * https://www.acmicpc.net/problem/7490
 */
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const op = [" ", "+", "-"];
let stack = [];
let answer = "";

for (let i = 1; i <= input[0]; i++) {
  recursive(2, input[i]);
  console.log(answer);
  stack = [];
  answer = "";
}

function recursive(num, input) {
  if (num > input) {
    if (evaluate(`${1 + stack.join("")}`)) {
      answer += `${1 + stack.join("")}\n`;
    }
    return;
  }

  for (let i = 0; i < op.length; i++) {
    stack.push(op[i] + num);
    recursive(num + 1, input);
    stack.pop();
  }
}

function evaluate(str) {
  let nospace = str.replaceAll(" ", "");

  if (eval(nospace) === 0) return true;
  else return false;
}
