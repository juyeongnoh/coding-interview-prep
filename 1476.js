let [e, s, m] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 1;

while (true) {
  if (
    (answer - e) % 15 === 0 &&
    (answer - s) % 28 === 0 &&
    (answer - m) % 19 === 0
  ) {
    console.log(answer);
    return;
  }
  answer++;
}
