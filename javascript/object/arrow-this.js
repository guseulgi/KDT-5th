
let sayHello = () => {
  console.log(`Hello, ${this.name} 입니다.`);
  console.log(this);
}

let sayHallo = function() {
  console.log(`Hallo, ${this.name} 입니다.`);
  console.log(this);
}

const boy = {
  name : "Mike",
  sayHello,
}
const girl = {
  name : "Jane",
  sayHallo,
}

boy.sayHello();
console.log("-------");
girl.sayHallo();