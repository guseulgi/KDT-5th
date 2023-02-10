// for(let index = 0; index < 10; index++) {
//   console.log(`인사를 ${index + 1} 드립니다. 🥳`);
// }


// 2중 반복문
// for (let i = 0; i < 3; i++) {
//   console.log(`상위 for문 ${i}`);

//   for (let j = 0; j < 3; j++) {
//     console.log(`   하위 for문 ${j}`);
//   }
// }


// for (let i = 2; i <= 9; i++) {
//   for(let j = 1; j <=9; j++) {
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }


let sum = 0;

for(let i = 0; i < 101; i++) {
  if(i % 2 === 0 && i % 5 === 0) {
    sum += i;
    console.log(i);
  }
}
console.log(sum);