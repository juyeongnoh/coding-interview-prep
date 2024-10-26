const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
const sizes = input[1].split(" ").map(Number);
const [t, p] = input[2].split(" ").map(Number);

let tshirts = sizes.reduce((prev, cur) => {
  let res = Math.floor(cur / t);
  if (cur > 0 && cur % t > 0) res++;
  return prev + res;
}, 0);

let dozen = Math.floor(n / p);
let pen = n % p;

console.log(tshirts);
console.log(dozen, pen);
