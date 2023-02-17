const fruits = ['사과', '딸기', '바나나', '수박', '망고'];

function conLog(a, b, ...c) {
  console.log(a, b, c);
}

conLog(...fruits);


///
let string = "apple";
let strToArr = [...string]
console.log(strToArr);  //[ 'a', 'p', 'p', 'l', 'e' ]

let strToArr2 = string.split('');
console.log(strToArr2);  //[ 'a', 'p', 'p', 'l', 'e' ]