// 빈복문

// for문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for in문
// airbnb의 컨벤션에 권장
//  IE 전부 사용 가능
for (const i in ['one', 'two']) {
    console.log(i);
}

// for of문
// airbnb의 컨벤션에 권장
// IE 전부 사용 불가
// 앞으로 치고 올라갈 예정
for (const i of ['one', 'two', 'three']) {
    console.log(i);
}

////////////

if (true) {
    var a = '1';
    let b = '2'; // if문 밖에서 쓸 수 없다.
    const c = '3'; // if문 밖에서 쓸 수 없다.
}
console.log(a);

for (let i = 0; i < 10; i++) {
    // i 변수를 스코프마다 잠금
    var a = '1';
    let b = '2'; // if문 밖에서 쓸 수 없다.
    const c = '3'; // if문 밖에서 쓸 수 없다.
    console.log(i); 
}
console.log(a);

/////////////

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]);
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data2.length; i++) {
    console.log(data3[i] - data3[i-1]);
}

////////////

let i = 0;
for (;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for (let i = 0;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for (let i = 0;;i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}

///////////

// 다음 수학점수의 평균을 구하세요.
let 수학점수 = [10, 99, 88, 85, 21, 35];
let result = 0;

// 1
for (let i = 0; i < 수학점수.length; i++) {
    result += 수학점수[i];
}
result /= 수학점수.length;
console.log(result);

// 2
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

/////////////

let user = [
    {
      "_id": "633e5b1711926cc42d1fbb4b",
      "index": 0,
      "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
      "age": 28,
      "name": "Mai Montoya",
      "gender": "female"
    },
    {
      "_id": "633e5b1718d6c001d2f771c7",
      "index": 1,
      "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
      "age": 22,
      "name": "Shelley Potts",
      "gender": "female"
    },
    {
      "_id": "633e5b17fecc26a897aa2283",
      "index": 2,
      "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
      "age": 22,
      "name": "Hensley Flores",
      "gender": "male"
    },
    {
      "_id": "633e5b17267fe16c24f00591",
      "index": 3,
      "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
      "age": 20,
      "name": "Holmes Morrow",
      "gender": "male"
    },
    {
      "_id": "633e5b17b30766b9c38594f5",
      "index": 4,
      "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
      "age": 25,
      "name": "Elisa Miller",
      "gender": "female"
    }
  ];

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

let female = 0;
let male = 0;
for (let i = 0; i < user.length; i++) {
if (user[i]['gender'] === 'female') {
    female += 1;
} else if (user[i]['gender'] === 'male') {
    male += 1;
}
}
// 여성
console.log(female);
// 남성
// console.log(user.length - female);
console.log(male);

user.filter(i => i.gender === 'female').length;

///////////

// 암기 (재귀함수 할 때 비교할 for문)

// 1. 구구단
for (let 단 = 2; 단 < 10; 단++) {
    for (let 곱 = 1; 곱 < 10; 곱++) {
        console.log(`${단} x ${곱} = ${단 * 곱}`);
    }
}

// 2. 문자열 뒤집기
let txt = 'hello world';
let reverse = '';

// 1
for (let i = txt.length - 1; i >= 0; i--) {
reverse += txt[i];
}

// 2
for (let i = 0; i < txt.length; i++) {
reverse = txt[i] + reverse;
}

// 3. 시그마 (누적합)
let s1 = 0;
for (let i = 1; i < 101; i++) {
    s1 += i;
}

// 4. 팩토리얼 
let s2 = 1;
for (let i = 1; i < 6; i++) {
    s2 *= i;
}

///////////////

// 문제1 : 다음 입력된 숫자들의 합을 구하라
// input : '12345'
// result : 15

let xx = '12345';
let result2 = 0;
for (let i = 0; i < xx.length; i++) {
    result2 += parseInt(xx[i]);
}

// 구글 입사문제
let arr = Array(10000).fill(0).map((_, index) => (index + 1)).join('');
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '8') {
        count++;
    }
}
console.log(count);
