/**
 * 모든 순열
 * https://www.acmicpc.net/problem/10974
 */
const n = parseInt(require("fs").readFileSync("dev/stdin").toString());

const visited = Array.from({ length: n }).fill(false);
const answer = [];

const recursive = (num) => {
  if (answer.length >= n) {
    console.log(answer.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      answer.push(i + 1);

      recursive(i + 1);

      visited[i] = false;
      answer.pop();
    }
  }
};

recursive(1);
