/**
 * 이분 그래프
 * https://www.acmicpc.net/problem/1707
 */

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let file = require("fs").readFileSync("dev/stdin");
let input = file.toString().split("\n");

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  let [v, e] = input[line].split(" ").map(Number);

  let graph = [];

  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [u, v] = input[line + i].split(" ").map(Number);
    graph[u].push([v]);
    graph[v].push([u]);
  }

  let visited = new Array(v + 1).fill(-1);

  for (let i = 1; i <= v; i++) {
    if (visited[i] == -1) bfs(i, graph, visited);
  }
  line += e + 1;

  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
}

function bfs(x, graph, visited) {
  const queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;

  while (queue.getLength() != 0) {
    x = queue.dequeue();

    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// let tc = Number(input[0]);
// let i = 1;

// let flag = 1;

// function setFlag() {
//   flag = flag ? 0 : 1;
//   return flag;
// }

// while (tc--) {
//   let [V, E] = input[i].split(" ").map(Number);

//   const graph = new Array(V + 1).fill().map(() => Array.from({ length: 0 }));
//   const visited = new Array(V + 1).fill(-1);

//   while (E--) {
//     i++;
//     const [v1, v2] = input[i].split(" ").map(Number);
//     graph[v1].push(v2);
//     graph[v2].push(v1);
//   }

//   for (let i = 1; i <= V; i++) {
//     bfs(graph, visited, i);
//   }

//   console.log(isBi(graph, visited) ? "YES" : "NO");

//   i++;
// }

// function bfs(graph, visited, start) {
//   const queue = new Queue();
//   queue.enqueue(start);

//   if (visited[start] !== -1) return;
//   visited[start] = setFlag();

//   while (queue.getLength() !== 0) {
//     const current = queue.dequeue();

//     for (const next of graph[current]) {
//       if (visited[next] !== -1) {
//         continue;
//       }

//       queue.enqueue(next);
//       visited[next] = setFlag();
//     }
//   }
// }

// function isBi(graph, visited) {
//   for (let i = 1; i < graph.length; i++) {
//     for (const v of graph[i]) {
//       if (visited[i] === visited[v]) return false;
//     }
//   }

//   return true;
// }

// function bfs(graph, start, V) {
//   const queue = new Queue();
//   queue.enqueue(start);

//   while (queue.getLength() !== 0) {
//     const current = queue.dequeue();

//     if (isBiGraph(graph, current)) return "YES";

//     for (let i = 1; i <= V; i++) {
//       if (current.some((el) => el >= i)) continue;
//       queue.enqueue([...current, i]);
//     }
//   }

//   return "NO";
// }

// function isBiGraph(graph, arr) {
//   const arr2 = [];
//   for (let i = 1; i < graph.length; i++) {
//     if (arr.includes(i)) continue;

//     arr2.push(i);
//   }

//   // check arr1
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;

//       if (graph[arr[i]].includes(arr[j])) return false;
//     }
//   }

//   // check arr2
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (i === j) continue;

//       if (graph[arr2[i]].includes(arr2[j])) return false;
//     }
//   }

//   return true;
// }

// // new array는 V+1 length 이므로 0번 인덱스는 스킵
// function bfs(graph, start, V) {
//   const queue = new Queue();
//   queue.enqueue(start);

//   while (queue.getLength() !== 0) {
//     const current = queue.dequeue();

//     if (isBiGraph(graph, current)) return "YES";

//     for (let i = 1; i <= V; i++) {
//       // 자신와 같거나 큰 인덱스의 요소에 true가 되어 있다면 continue;
//       // ex. 3과 같거나 높은 인덱스의 요소(3, 4, 5)에 true가 되어 있다면 continue;
//       if (current.slice(i).includes(true)) continue;

//       const newArray = [...current];
//       newArray[i] = true;
//       queue.enqueue(newArray);
//     }
//   }

//   return "NO";
// }

// function isBiGraph(graph, current) {
//   // 집합 배열 A
//   for (let i = 1; i < current.length; i++) {
//     for (let j = 1; j < current.length; j++) {
//       if (i === j) continue;

//       if (current[i] && current[j] && graph[i].includes(j)) {
//         return false;
//       }
//     }
//   }

//   // 집합 배열 B
//   for (let i = 1; i < current.length; i++) {
//     for (let j = 1; j < current.length; j++) {
//       if (i === j) continue;

//       if (!current[i] && !current[j] && graph[i].includes(j)) {
//         return false;
//       }
//     }
//   }

//   return true;
// }
