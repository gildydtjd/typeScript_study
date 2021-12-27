// 1. Boolean(불리언)
export let isDone: boolean = false;

// 2. Number(숫자)
export let decimal: number = 6;

// 3. String(문자열)
const fullName = 'gildydtjd';
const age = '29';
export let sentence: string = `Hello, my name is ${fullName}.I'll be ${age} years old next month.`;

// 4. Array(배열)
// 1. 배열 요소들을 나타내는 타입 뒤에 `[]` 쓰기
export let list: number[] = [1, 2, 3];

// 2. 제네릭 배열 타입 쓰기 - `Array<elemType>
export let list1: Array<number> = [1, 2, 3];

// 5. Tuple(튜플)
// 튜플 타입을 사용하면 요소의 타입과 개수가 고정된 배열을 표현할 수 있다. (단, 요소들의 타입이 모두 같을 필요는 없다.)
export let x: [string, number]; // 튜플 타입으로 선언
x = ['hello', 10]; // 초기화 - 성공
// x = [10, "hello"]; // 잘못된 초기화 - 오류

// 6. Any
// any type 을 쓸거면 타입스크립트를 하지말라

// 7. Void
// void는 보통 함수에서 반환 값이 없음을 표현할 때 쓴다.
export default function warnUser(): void {
  console.log('This is my warning message');
}

// 8. Object(객체)
// object는 원시타입(number, string, boolean, bigint, symbol, null, undefined)이 아닌 타입을 나타낸다.
export declare function create(o: object | null): void;
// create({ prop: 0}); // 성공
// create(null); // 성공
// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류
