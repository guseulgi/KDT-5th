const fruits = ['사과', '파인애플', '수박', '포도', '오렌지'];

const fruitsObjArr = fruits.map(function(value, idx, origin) {
  // console.log("index:", idx);
  // console.log("value:", value);
  // console.log("Array", origin);

  return {
    index : idx,
    value : value,
  };
});
// console.log(fruitsObjArr);

const nums = [3, 6, 9, 12, 15, 18, 21];
const newNums = nums.map((value) => value / 3);
// console.log(newNums); 

const nums2 = [1, 2, 3, 4, 5];
const newNums2 = nums2.map(value => value * 4);
// console.log(nums2);
// console.log(newNums2);


///
const maxNum = 100;
let numArr = [];
let sum = 0;
for(let i = 0; i < maxNum; i++) {
  numArr[i] = i + 1;
}
numArr.map((value) => {
  sum += value;
})
// console.log(sum);


///
function solution(my_string) {
  let answer = 0;
  const number = /[0-9]/;
  
  my_string.split('').forEach(char => {
      if(number.test(char) === true) {
          answer += Number(char);
      }
  })
  return answer;
}
// console.log(solution("aAb1B2cC34oOp"));


/// filter()
const numbers2 = [1, 2, 3, 4, 5, 6];
const filterArr = numbers2.filter(function(value, item, origin) {
  return value > 3;
});
// console.log(filterArr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const resultArr = words.filter(value => value.length > 6);
// console.log(resultArr);

let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let sameArr = fruits1.filter(x => fruits2.includes(x));
let diffArr = fruits1.filter(x => !fruits2.includes(x));
// console.log(sameArr);
// console.log(diffArr);


/// find()/findIndex()
const fruits3 = ["Apple","Banana", "Cherry"];
const findResult = fruits3.find(item => item === "Apple");
// console.log(findResult);
const findIndexResult = fruits3.findIndex(item => item === "Banana");
// console.log(findIndexResult);


///reduce
const numbers5 = [1, 2, 3, 4, 5, 6];
const sumResult = numbers5.reduce((acc, value, idx, origin) => {
  return acc += value;
}, 19);
// console.log(sumResult);

const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const result = numbers6.reduce((acc, value) => {
  if(value > 0) { acc[1] += 1; }
  else { acc[0] += 1; }
  return acc;
}, [0, 0]);
// console.log(result);


//실습
let arrayNums = [];
for(let i = 0; i < 100; i +=1 ) {
  arrayNums.push(i+1);
}
const resultSum = arrayNums.reduce((acc, value) => {
  return acc += value;
}, 0);
console.log(resultSum);