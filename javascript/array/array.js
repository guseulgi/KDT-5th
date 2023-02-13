// let kdt_5th_3rd = [ '최두루', '최인영', '신상아', '이유림', '구슬기' ];
// console.log(kdt_5th_3rd.unshift('백진솔'));

// console.log(kdt_5th_3rd[2],'님');
// console.log(kdt_5th_3rd.length);
// for(let arr of kdt_5th_3rd) {
//   console.log(arr, '님');
// }

// console.log(kdt_5th_3rd.shift());
// for(let arr of kdt_5th_3rd) {
//   console.log(arr, '님');
// }


let kdt = ['최두루', '최인영', '신상아', '이유림', '구슬기'];
kdt.push('구슬기');

for(let i = 0; i <kdt.length - 1; i++) {
  console.log(`3번째 줄의 ${i + 1}번째 참여자 이름은 ${kdt[i]} 입니다.`);
}