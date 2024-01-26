/**
 * 0 만들기
 * https://www.acmicpc.net/problem/7490
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let tc = input.shift();
let answer = "";

const operators = [" ", "+", "-"];

let selected = "1";

for (let i = 0; i < tc; i++) {
  recursive(2, input[i]);
  console.log(answer);
  answer = "";
}

// depth는 2부터 시작
function recursive(depth, n) {
  if (depth > n) return;

  for (let operator of operators) {
    selected += operator + String(depth);

    // 식이 다 채워지면
    // 지금까지 세운 식의 결과가 0이 되는지 검사
    if (selected.length === n + n - 1) {
      // ' ' 연산자는 우선적으로 처리
      let equation = selected.replace(/ /g, "");

      // 식의 첫 항을 result에 집어넣기 (operand를 만날때까지 result에 추가)
      let result = "";
      for (let i = 0; i < equation.length; i++) {
        if (isNaN(Number(equation[i]))) break;
        else result += equation[i];
      }
      result = Number(result);

      for (let i = 0; i < equation.length; i++) {
        // operator를 만나면
        if (isNaN(Number(equation[i]))) {
          // 다음 operator가 나오기 전까지의 숫자를 저장
          let num = "";
          for (let j = i + 1; j < equation.length; j++) {
            if (isNaN(Number(equation[j]))) break;
            else num += equation[j];
          }
          num = Number(num);

          // case문으로 result와 연산
          switch (equation[i]) {
            case "+":
              result += num;
              break;
            case "-":
              result -= num;
              break;
          }
          i += String(num).length;
        }
      }
      if (result === 0) answer += selected + "\n";
    }

    recursive(depth + 1, n);

    // operand + depth를 selected에서 제거
    selected = selected.slice(0, selected.length - 2);
  }
}
