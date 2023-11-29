/**
 * 주유소
 */

let [cities, distance, price] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

console.log(cities, distance, price);

cost = distance[0] * price[0];
console.log(cost);

// for (let i = 1; i < cities; i++) {
//   // check next node
//   // if next node is more expensive, check next node and see if it's more expensive

//   let j = i + 1;
//   for (; j < cities; j++) {
//     if (price[i] > price[j]) break;
//   }

  
// }

for (let i = 1; i < cities; i++) {
  cost += 
}