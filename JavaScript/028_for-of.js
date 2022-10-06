// for in문
// airbnb의 컨벤션에 권장
//  IE 전부 사용 가능
// 인덱스를 순차적으로 뽑음
let data = {
    'one' : '하나',
    'two' : '둘',
    'three' : '셋',
    'four' : '넷',
}

let data2 = [10, 20, 30, 40]

let data3 = {
    0 : 10,
    1 : 20,
    2 : 30,
    3 : 40,
}

for (const i in data) {
    console.log(i);
}

for (const i in data2) {
    console.log(i);
}

for (const i in 'hello world') {
    console.log(i);
}

// for of문
// airbnb의 컨벤션에 권장
// IE 전부 사용 불가
// 앞으로 치고 올라갈 예정
// 
for (const i of 'hello world') {
    console.log(i);
}

let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

/////////////

const seat = [['피카츄' , '라이츄', '파이리' ],
              ['꼬부기' , '버터플', '야도란' ],
              ['피죤투' , '또가스', '메타몽' ]];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}