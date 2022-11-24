let me = { age: 30 };
let ypu = me; // 참조카운트 : 2

me = null; // 참조카운트 : 1
ypu = null; // 참조카운트 : 0

let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2

let a = x; // object1 의 참조카운트는 2 (x, a)
x = 1; // object1 의 참조카운트는 1 (a)

// let b = a.y; // object2 의 참조카운트는 2 (a.y, b)
// a = 2; // object1 의 참조카운트는 0 () -> 가비지컬렉터 대상이 됨
// 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현합니다.

function outer() {
    let privateVal = ["test"]; // 가비지컬렉터의 대상이 안됨

    function getPrivate() {
        return privateVal;
    }

    return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// secretVal = null;

let aespa = ["카리나", "윈터", "지젤", "닝닝"];
// aespa.forEach((item, index) => {
//     console.log(item);
//     aespa[index] = item + "💖";
// });

// console.log(aespa);

const aespa2 = aespa.map((item) => {
    return item + "💖";
});

console.log(aespa);
console.log(aespa2);
