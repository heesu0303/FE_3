// nullish
// https://ko.javascript.info/nullish-coalescing-operator

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); 
// output: 바이올렛

// let a = 10;
// let b = 20;
// let c = 30;
// output: 10

// null, undefined면 패스
// let a = null;
// let b = 20;
// let c = null;
// output: 20

let a;
let b;
let c;

let d = a ?? b ?? c;
// output: undefined

let 실명;
let 별명 = '힛짱';
let 기본값 = '사용자';
let id = 실명 ?? 별명 ?? 기본값;
// output: 힛짱

let height = 0;

console.log(height || 100); // output: 100
console.log(height ?? 100); // output: 0

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined