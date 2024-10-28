/**
 * 부등호
 * https://www.acmicpc.net/problem/2529
 */
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const k = Number(input[0]);
const inequalities = input[1].split(" ");

let max = 0;
let min = 9999999999;

let idx = 0;

const stack = [];
const visited = new Array(9).fill(false);

function recursive(depth) {
  // 스택의 길이가 부등호 개수 k + 1개에 도달했다면
  if (stack.length === k + 1) {
    const str = stack.join("");
    const num = Number(str);

    max = Math.max(Number(max), num) === Number(max) ? max : str;
    min = Math.min(Number(min), num) === Number(min) ? min : str;

    return;
  }

  for (let i = 0; i <= 9; i++) {
    // 중복된 수가 나오면 안되므로 이미 지나온 숫자는 패스
    if (visited[i]) continue;

    // 부등호 개수 k + 1개만큼의 수열만 필요하기 때문에
    // 부등호 배열의 범위를 넘어가는 연산은 패스
    if (!inequalities[idx]) continue;

    // 스택의 첫번째 요소는 부등호 연산 패스
    if (stack.length === 0) {
      visited[i] = true;
      stack.push(i);
      recursive(depth + 1);
      stack.pop();
      visited[i] = false;
    } else if (
      inequalities[idx] === ">" ? stack[depth - 1] > i : stack[depth - 1] < i
    ) {
      // 스택의 두번째 요소부터는 연산 시작
      // `${스택의 이전 요소} ${현재 부등호} ${스택의 현재 요소}`
      visited[i] = true;
      stack.push(i);
      idx++;
      recursive(depth + 1, i);
      idx--;
      stack.pop();
      visited[i] = false;
    }
  }
}

recursive(0);

console.log(max);
console.log(min);
