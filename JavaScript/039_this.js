// this
function a(){ 
    console.log(this) 
}
a();

let test = {
    one: 1,
    two: 2,
    three: function() {
        console.log(this);
    },
}
test.three();

let test2 = test.three;

// 추가 예제
function sayName() {
    console.log(this.name);
}
var name = 'Hero'; // var만 윈도우에 적용됨

let peter = {
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    sayName: sayName
}

function a() {
    console.log(this.name); // window
    function b() {
        console.log(this.name); // window
    }
    b();
}
a();