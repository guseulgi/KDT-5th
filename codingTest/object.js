const obj1 = { a : 1, b : 2 };
const obj2 = { b : 3, c : 4 };

const mergeObj = Object.assign(obj1, obj2);
console.log(obj1); //{ a: 1, b: 3, c: 4 }
console.log(obj2); //{ b: 3, c: 4 }
console.log(mergeObj); //{ a: 1, b: 3, c: 4 }
console.log(obj1 === mergeObj); //true

mergeObj.a = 10;
console.log(obj1); //{ a: 10, b: 3, c: 4 }


/// 비구조화 할당
const obj = {
  name : '구슬기',
  age : 30,
  brain : null,
}

//const name = obj.name; 원래 사용법
const { name } = obj; // 비구조화 할당법 const { 키명 } = 객체명;
