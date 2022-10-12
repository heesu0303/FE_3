// set
// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add('f');
console.log(s);

// Set을 순환하기
for (let variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
console.log(ss.has('a'));

// Set의 모든 값을 제거하기 
ss.clear
console.log(ss);


let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value))
// 합집합
let union = new Set([...a].concat(...b))
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));


// 문제
게시판 = ['이호준','이호준', '이호준', '장희수','이준근','김은하', '장희수'];

// 문제 1. 몇 명이 게시판에 게시물을 썼나요?
let 작성자 = new Set(게시판);
작성자.size;

// 문제 2. 각각 몇 개의 게시물을 작성하였나요?
for (const i of 작성자) {
    console.log(i, 게시판.filter(e => e === i).length);
}

let map = new Map();
for (const i of 게시판) {
    map.set(i, (map.get(i) ||  0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}