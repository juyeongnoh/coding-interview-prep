/**
 * 크로아티아 알파벳
 * https://www.acmicpc.net/problem/2941
 */

let input = require("fs").readFileSync("dev/stdin").toString().trim();
let count = 0;

const CROATIAN = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function checkCroatian(str) {
  for (alphabet of CROATIAN) {
    if (str.startsWith(alphabet)) return alphabet;
  }

  return null;
}

while (input.length) {
  if (checkCroatian(input)) {
    console.log(checkCroatian(input));
    const length = checkCroatian(input).length;
    input = input.slice(length);
    count++;
  } else {
    input = input.slice(1);
    count++;
  }
}

console.log(count);
