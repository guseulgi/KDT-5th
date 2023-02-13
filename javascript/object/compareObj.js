// const seulgi = {
//   name : "구슬기",
//   email : 'guseul9405@gmail.com',
// }

// const 슬기 = {
//   name : "구슬기",
//   email : 'guseul9405@gmail.com',
// }

// console.log(seulgi == 슬기); // false
// console.log(seulgi === 슬기); // false


///
const obj = {
  name : '아무개',
}
const 오브젝트 = {
  name : '아무개',
}
const copyObj = obj;
copyObj.name = '아무개 카피';

console.log(obj); //{ name: '아무개 카피' }
console.log(copyObj); //{ name: '아무개 카피' }
console.log(obj === copyObj); //true

console.log(JSON.stringify(obj) === JSON.stringify(copyObj));
console.log(JSON.stringify(obj) === JSON.stringify(오브젝트));