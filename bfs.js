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

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

const visited = new Array(graph.length).fill(false);

function bfs(graph, start, visited) {
  // 그래프에서 첫번째 원소를 큐에 삽입
  const queue = new Queue();
  queue.enqueue(start);

  // 첫번째 원소를 방문 처리
  visited[start] = true;

  // 큐가 빌 때까지 반복
  while (queue.getLength() !== 0) {
    // 큐에서 하나의 원소를 뽑아 출력하기
    const v = queue.dequeue();
    console.log(v);

    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (const i of graph[v]) {
      if (visited[i]) continue;
      queue.enqueue(i);
      visited[i] = true;
    }
  }
}

bfs(graph, 1, visited);
