/**
 * 큐
 * https://www.acmicpc.net/problem/10845
 */
let [n, ...cmd] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

n = Number(n);

let queue = [];
let answer = "";

for (let i = 0; i < n; i++) {
  let [action, value] = cmd[i].split(" ");

  switch (action) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      if (queue.length) answer += queue.shift() + "\n";
      else answer += "-1\n";
      break;
    case "size":
      answer += queue.length + "\n";
      break;
    case "empty":
      if (!queue.length) answer += "1\n";
      else answer += "0\n";
      break;
    case "front":
      if (!queue.length) answer += "-1\n";
      else answer += queue[0] + "\n";
      break;
    case "back":
      if (!queue.length) answer += "-1\n";
      else answer += queue[queue.length - 1] + "\n";
      break;
  }
}

console.log(answer);
