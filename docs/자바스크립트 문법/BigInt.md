Number에서 나타낼 수 있는 최대치인 $2^{53}-1$보다 큰 정수를 표현할 수 있는 내장 객체
$2^{53}-1=9,007,199,254,740,991$를 넘어가는 숫자를 다를 때 사용한다.

# 선언하는 법
```js
const theBiggestInt = 9007199254740991n;   // 정수 리터럴
const alsoHuge = BigInt(9007199254740991); // BigInt 객체
```
# 특징
- Number와 BigInt를 혼합해서 연산할 수 없으니 같은 자료형으로 변환한 후 사용해야 한다.
- Math 객체의 메서드 사용할 수 없다.
- BigInt를 Number로 변환하면 데이터의 손실이 일어날 수 있다. (Number의 최대값보다 큰 경우)
- 모든 BigInt는 부호를 가져야 한다. 그래서 `>>>` (부호 버림 오른쪽 시프트)는 사용할 수 없다.
- 단항 연산자 `+`도 지원하지 않는다.

# Number와의 관계
Number와 일치하지 않지만 동등하다.
```js
const bigInt = BigInt(100);
const number = 100;

console.log(bigint === number) // false
console.log(bigint == number)  // true
```
# 사용
Number의 최대치보다 더 높은 값을 사용해야 할 때 사용한다.
BigInt 객체를 `console.log()`를 이용해 바로 출력하면 숫자 뒤에 `n`이 붙어서 나온다.
그렇기 때문에 `String`으로 변환한 후 출력한다.
```js
const theBiggestInt = 9007199254740991n;
console.log(theBiggestInt)            // 9007199254740991n
console.log(String(TheBiggestInt))    // 9007199254740991
console.log(theBiggestInt.toString()) // 9007199254740991
```