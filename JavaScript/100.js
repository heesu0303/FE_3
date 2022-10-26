// 클래스 나오기 전, 비공개 프로퍼티 (클로저)

// 그냥 함수
// 모듈 + 사용자 정의 혼합패턴
function Person() {
    let age = 30; // 비공개 프로퍼티로

    // 생성자 함수
    function innerPerson() {

    }

    innerPerson.prototype.getAge = function() {
        return age;
    }

    return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

// IIFE : 함수를 선언과 동시에 바로 실행 가능한 함수
// 이름 없는 익명함수 -> 소괄호로 감싸고 -> 함수 실행시키듯 마지막에 () 넣어줌
(function() {
    console.log('IIFE')
})();

// IIFE로 개선하기
// IIFE를 이용한 모듈 사용자 정의 혼합패턴
const NewPerson = (
    function() {
        let age = 28;

        function innerPerson() {}

        innerPerson.prototype.getAge = function() {
            return age;
        }

        return innerPerson;
    }
)();

const personWithSecret = new NewPerson();
console.log(personWithSecret.getAge());