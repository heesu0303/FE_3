// 반복문 while

let a = 0
while (a < 10) {
    a++;
    console.log(a);
}

while (true) {
    console.log('무한반복');
}

let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    j = 1;
    i++;
}

let value = [10, 20, 30, 40];
let x = 0;
while (x < value.length) {
    console.log(value[x]);
    x++;
}

// continue : 다음 루프로 
for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue;
    }
    console.log(i);
}
// break : 탈출
for (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        break;
    }
    console.log(i);
}

// 레이블
// 레이블 사용시 주의사항
// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.
// 가독성이 굉장히 떨어진다.

timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

for (let x = 2; x < 10; x++) {
    test:
      for (let y = 1; y < 10; y++) {
          if (x === 4) break test;
          console.log(`${x} X ${y} = ${x * y}`);
    }
}