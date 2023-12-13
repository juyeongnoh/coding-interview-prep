/**
 * 알파벳 찾기
 * https://www.acmicpc.net/problem/10809
 */

const input = require("fs").readFileSync("dev/stdin").toString().split("");

let alphabet = new Array(26).fill(-1);

for (letter of input) {
  alphabet[letter.charCodeAt() - 97] = input.indexOf(letter);
}
console.log(alphabet.join(" "));
