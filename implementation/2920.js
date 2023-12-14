/**
 * 음계
 * https://www.acmicpc.net/problem/2920
 */

let notes = require("fs").readFileSync("dev/stdin").toString().trim();

if (notes === "1 2 3 4 5 6 7 8") console.log("ascending");
else if (notes === "8 7 6 5 4 3 2 1") console.log("descending");
else console.log("mixed");
