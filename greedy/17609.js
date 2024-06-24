/**
 * 회문
 * https://www.acmicpc.net/problem/17609
 */
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  let str = input[i];

  if (isPalindrome(str)) console.log(0);
  else {
    let found = false;
    let length = str.length;

    for (let i = 0; i < parseInt(length / 2); i++) {
      if (str[i] != str[length - i - 1]) {
        if (isPalindrome(str.slice(0, i) + str.slice(i + 1, length))) {
          found = true;
        }
        if (
          isPalindrome(
            str.slice(0, length - i - 1) + str.slice(length - i, length)
          )
        ) {
          found = true;
        }
        break;
      }
    }

    console.log(found ? 1 : 2);
  }
}

function isPalindrome(str) {
  let str_reverse = str.split("").reverse().join("");

  return str == str_reverse ? true : false;
}
