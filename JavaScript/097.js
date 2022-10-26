// 소세지 만들기 실습

class Sausage {
    constructor(el1, el2) {
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste() {
        console.log(`소세지에서 ${this.inside1}와 ${this.inside2} 맛이 난다!`);
    }
}

class FireSausage extends Sausage {
    constructor(el1, el2, el3) {
        super(el1, el2);
        this.inside3 = el3;
    }

    taste() {
        console.log(`소세지에서 ${this.inside1}와 ${this.inside2} 맛이 난다! 아니 근데 ${this.inside3}맛까지 난다고..?`);
    }
}

// const sausage = new Sausage('치즈', '갈릭');
const fireSausage = new FireSausage('치즈', '갈릭','불');
fireSausage.taste();