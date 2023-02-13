// const user = {
// 	name : 'Mike',
//     sayHello : function() {
//     	console.log(`Hello, I'm ${this.name}`);
//     }
// }

// user.sayHello();
///

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// let boy = {
//   name : 'Mike',
//   sayHello,
// }
// let girl = {
//   name : 'Jane',
//   sayHello,
// }
// boy.sayHello(); //Hello, I'm Mike
// girl.sayHello(); //Hello, I'm Jane
// sayHello(); //Hello, I'm undefined

let showHeight = function () {
  console.log(`키는 ${this.height}cm 입니다.`);
}

let pororo = {
  name : "뽀로로",
  height : 100,
  getName() {
    console.log(`이름은 ${this.name} 입니다.`);
  },
  showHeight,
}

pororo.getName();
pororo.showHeight();