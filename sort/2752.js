let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let result = "";
let arr = input.split(" ").map(Number);

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  result += arr[i] + " ";
}

console.log(result);
