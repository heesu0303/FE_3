// get, set 키워드를 이용해 아래처럼 코드를 좀 더 단순화
// get과 set 키워드를 사용하면 마치 객체의 프로퍼티에 접근하듯 값을 다룰수 있게 됩니다.
// 비공개 프로퍼티에 직접적으로 ..

class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    }
}

const bot = new Robot('재현', 1234);

bot.password = 5678;
console.log(bot.password);