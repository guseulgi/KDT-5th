let nameArr = ['가', '나', '다'];

console.log(nameArr[0], nameArr[1], nameArr[2], "문자열 매개변수");
console.log(nameArr[0] + nameArr[1] + nameArr[2] + "라");
console.log(`${nameArr[0]}, ${nameArr[1]}, ${nameArr[2]}`);

////

let num = 2;
let str = "String";
let bool = false;
let obj = {};

console.log(`"${typeof num}" isn't "${typeof str}" data type.`);
console.log(`typeof를 "${typeof bool}"이나 "null"에 사용하면, "${typeof obj}" 결과를 얻을 수 있습니다.`);