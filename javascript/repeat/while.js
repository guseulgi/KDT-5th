// let idx = 0;

// while(true) {
//   idx++;
//   if(idx === 10) break;
// }


// let idx = 0;
// do {
//   idx++;
//   console.log("do-while 실행");
// } while (idx > 10);

// let idx2 = 0;
// while (idx2 > 10) {
//   idx2++;
//   console.log("while 실행");
// }


// let operand1 = 1;
// let operand2 = 1; 
// while (operand1 < 9) {
//   operand1++;
//   while (operand2 < 10) {
//     console.log(`${operand1} x ${operand2} = ${operand1*operand2}`);
//     operand2++;
//   }
//   operand2 = 1;
// }

let sum = 0;
for (let i = 1; i <= 1000; i++) {
  if(i % 2 === 1) continue;
  sum += i;
}
console.log(sum);