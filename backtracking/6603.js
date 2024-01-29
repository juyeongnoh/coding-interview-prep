/**
 * 로또
 * https://www.acmicpc.net/problem/6603
 */
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let visited = new Array(12).fill(false);
let selected = [];
let answer = "";

for (let tc of input) {
  let k = tc.shift();
  if (k === 0) return;

  recursive(1, tc);
  console.log(answer);
  answer = "";
}

function recursive(depth, arr) {
  if (depth > 6) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    for (let j = 0; j <= i; j++) visited[j] = true;
    selected.push(arr[i]);
    recursive(depth + 1, arr);
    for (let j = 0; j <= i; j++) visited[j] = false;
    selected.pop(arr[i]);
  }
}
