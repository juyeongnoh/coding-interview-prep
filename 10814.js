/**
 * 나이순 정렬
 * https://www.acmicpc.net/problem/10814
 * 소요 시간: 5분 51초
 */
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");
let answer = "";

const n = Number(input[0]);
let members = [];

for (let i = 1; i <= n; i++) {
  const [age, name] = input[i].split(" ");
  members.push({ age, name });
}

members.sort((a, b) => a.age - b.age);

for (const member of members) {
  answer += member.age + " " + member.name + "\n";
}

console.log(answer);
