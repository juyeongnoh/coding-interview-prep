/**
 * 모든 순열
 * https://www.acmicpc.net/problem/10974
 */
let n = Number(require("fs").readFileSync("dev/stdin").toString());
let visited = new Array(n).fill(false);
let selected = [];
let answer = "";

function recursive(depth) {
  if (depth > n) return;
  for (let i = 1; i <= n; i++) {
    if (!visited[i - 1]) {
      visited[i - 1] = true;
      selected.push(i);
      if (selected.length === n) answer += selected.join(" ") + "\n";
      recursive(depth + 1);
      visited[i - 1] = false;
      selected.pop();
    }
  }
}

recursive(0);
console.log(answer);
