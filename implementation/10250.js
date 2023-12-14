/**
 * ACM 호텔
 * https://www.acmicpc.net/problem/10250
 */

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  let [h, w, n] = input[i].split(" ").map(Number);
  let floor, no;
  for (j = 1; j <= w; j++) {
    no = j;
    for (k = 1; k <= h; k++) {
      floor = k;
      n--;
      if (!n) break;
    }
    if (!n) break;
  }

  console.log(String(floor) + String(no).padStart(2, 0));
}
