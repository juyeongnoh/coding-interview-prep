/**
 * 팰린드롬인지 확인하기
 * https://www.acmicpc.net/problem/10988
 */
let input = require("fs").readFileSync("dev/stdin").toString().trim().split("");
let isPalindrome = 1;

for (let i = 0; i < parseInt(input.length / 2); i++) {
  if (input[i] !== input[input.length - 1 - i]) isPalindrome = 0;
}

console.log(isPalindrome);
