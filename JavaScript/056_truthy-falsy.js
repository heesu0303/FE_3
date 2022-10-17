console.log('0' == 0); // true
console.log('0' === 0); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log(0 == false); // true
console.log(0 === false); // false

// 1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 난 적이 있다.
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error가 난 적이 있다.
console.log('true' == true); // false
console.log('true' === true); // false

console.log(0 == ''); // true 주의!
console.log(0 === ''); // false 주의!

console.log(false == ''); // true 주의!
console.log(false === ''); // false 주의!

console.log(false == null); // false 주의!
console.log(false === null); // false 주의!

console.log(false == undefined); // false 주의!
console.log(false === undefined); // false 주의!

// 아래 내용이 많아서 별도 파일로 분리하여 설명!
console.log(NaN == NaN); // false 주의!
console.log(NaN === NaN); // false 주의!


function truthyAndFalsy(value) {
    return !!value;
}

truthyAndFalsy([]); // true 주의! -> 비어있지 않고 length 값을 가지고 있다.
truthyAndFalsy({}); // true 주의!
truthyAndFalsy(''); // false 주의!
truthyAndFalsy(null); // false 주의!
truthyAndFalsy(undefined); // false 주의!
truthyAndFalsy(NaN); // false 주의!
truthyAndFalsy(Infinity); // true 주의!

truthyAndFalsy(-100); // true
truthyAndFalsy('hello'); // true

console.log('----------------');
console.log('드모르간 법칙');

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i)
    }
}


// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 카오스
console.log([] == ![]); // true
console.log([] == 0);

// 