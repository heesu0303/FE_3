// 비공개(private) 프로퍼티

// class를 통해 인스턴스를 만들었을 때 보통 우리는 아무런 제약없이 인스턴스의 프로퍼티에 접근하는 것이 가능합니다. 
class Robot {
          
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

const bot = new Robot('smith');

bot.name // smith

// 프로퍼티의 값을 수정하는 것도 가능합니다.
bot.name = 'jay';
bot.name // jay

bot.sayYourName();


// 중요한 데이터를 조심스럽게 다뤄야 할 경우, 그래서 이런 데이터를 외부에서 함부로 수정할 수 없게 만들고 싶을 때 우리는 비공개 프로퍼티로 데이터를 변경할 수 있습니다.
class Robot2 {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    getPassword() {
        return this.#password
    }

    setPassword(pw) {
        this.#password = pw;
    }
}

const robot = new Robot2('힛짱', '1234');
// robot.#password
robot.getPassword(); // 1234
robot.setPassword('heejjang');
robot.getPassword(); // heejjang

robot.sayYourName();