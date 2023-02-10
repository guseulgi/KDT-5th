
sayHello(); //OK
//sayBye(); //ReferenceError
//showError(); //ReferenceError

//함수 선언식
function sayHello() {
  console.log("Hello!");
}

//함수 표현식
let sayBye = function() {
  console.log("Bye!");
}

//화살표 함수 
let showError = () => {
  console.log("Error!");
}
sayBye(); //OK
showError(); //OK