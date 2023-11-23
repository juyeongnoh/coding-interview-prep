최악의 경우 시간 복잡도 O(N log N) 보장
문제 풀 때 단순히 정렬 기능이 필요하다면 sort() 사용
만약 sort() 사용이 제한된다면, 병합 정렬과 같은 알고리즘 직접 구현

`arr.sort(compareFunction)`

sort() 함수는 매개변수로 `정렬 기준을 정해주는 함수`를 삽입해 줘야 한다.
넣어주지 않으면 각 원소가 문자열로 취급되어 유니코드 값 순서대로 정렬된다.
그래서 항상 정렬 기준을 명시하는 습관 들이는 것이 중요하다.

sort() 함수는 배열을 직접 정렬한다.
즉, 원본 배열이 바뀐다.


정수 오름차순 정렬 예시 1

```js
let arr = [1, 6, 7, 3, 5, 2, 5, 4, 15];

function compare(a, b) {
	if (a < b) return -1;
	else if (a > b) return 1;
	else return 0;
}

arr.sort(compare);

console.log(arr);
```

정수 오름차순 정렬 예시 2

```js
let arr = [1, 6, 7, 3, 5, 2, 5, 4, 15];

function compare(a, b) {
	return a - b; // a가 b보다 작을 때, 반환 값이 음수가 되어 a가 앞에 위치한다.
}

arr.sort(compare);

console.log(arr);
```

정수 내림차순 정렬 예시

```js
let arr = [1, 6, 7, 3, 5, 2, 5, 4, 15];

function compare(a, b) {
	return b - a;
}

arr.sort(compare);

console.log(arr);
```

문자 오름차순 정렬 예시
아무것도 넣지 않아도 유니코드 순으로 정리해준다.

```js
let arr = [
	"pineapple",
	"banana",
	"durian",
	"apple",
	"carrot"
];

arr.sort();

console.log(arr);
```

문자 내림차순 정렬 예시

```js
let arr = [
	"pineapple",
	"banana",
	"durian",
	"apple",
	"carrot"
];

function compare(a, b) {
	if (a > b) return -1;
	else if (a < b) return 1;
	else return 0;
}

arr.sort(compare);

console.log(arr);
```

문자 오름차순 정렬 예시 (대소문자 구분 X)

```js
let arr = [
	"pineapple",
	"Banana",
	"durian",
	"Apple",
	"carrot"
];

function compare(a, b) {
	const upperCaseA = a.toUpperCase();
	const upperCaseB = b.toUpperCase();
	if (upperCaseA < upperCaseB) return -1;
	else if (upperCaseA > upperCaseB) return 1;
	else return 0;
}

arr.sort(compare);

console.log(arr);
```

객체를 원하는 기준으로 오름차순 정렬

```js
let arr = [
	{ name: "홍길동", score: 90 },
	{ name: "김철수", score: 85 },
	{ name: "박영희", score: 97 },
];

function compare(a, b) {
	return b.score - a.score;
}

arr.sort(compare);

console.log(arr);
```