/**
 * 수 찾기
 * https://www.acmicpc.net/problem/1920
 */
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let nInputs = input[1].split(" ").map(Number);
let m = Number(input[2]);
let mInputs = input[3].split(" ").map(Number);

nInputs.sort((a, b) => a - b);

let answer = "";

for (el of mInputs) {
  if (binarySearch(nInputs, el) !== -1) answer += "1\n";
  else answer += "0\n";
}
console.log(answer);

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
