/**
 * 도영이가 만든 맛있는 음식
 * https://www.acmicpc.net/problem/2961
 */

let [n, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
n = n[0];

let visited = new Array(n).fill(false);
let selected = [];
let taste = [];

function recursive(depth) {
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      for (let j = 0; j <= i; j++) visited[j] = true;
      selected.push(i);
      taste.push(calcTaste(selected));
      recursive(depth + 1);
      for (let j = 0; j <= i; j++) visited[j] = false;
      selected.pop();
    }
  }
}

function calcTaste(arr) {
  let sourness = input[arr[0]][0];
  let bitterness = input[arr[0]][1];

  for (let i = 1; i < arr.length; i++) {
    sourness *= input[arr[i]][0];
    bitterness += input[arr[i]][1];
  }

  return Math.abs(sourness - bitterness);
}

recursive(1);
console.log(Math.min(...taste));
