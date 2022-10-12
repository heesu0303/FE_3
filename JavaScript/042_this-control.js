// this 조작

// call()
var peter = {
    name: "Peter Parker",
    sayName: function (느낌표) {
        console.log(this.name + 느낌표);
    },
};

var bruce = {
    name: "Bruce Wayne",
    // sayName : function(){
    //     console.log(this.name);
    // }
};
peter.sayName("!");
peter.sayName.call(bruce, "!"); // 굳이!!!!? 오늘보고 평생 안볼수도...ㅎ

// apply()
var peter = {
    name: "Peter Parker",
    sayName: function (is, is2) {
        console.log(this.name + " is " + is + " or " + is2);
    },
};

var bruce = {
    name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);


// bind()
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: "bruce",
    sayName: sayName,
};

var peter = {
    name: "peter",
    sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();