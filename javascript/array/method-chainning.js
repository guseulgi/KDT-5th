let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split('-');
let helloTestArr2 = helloTest.split('');

// console.log(helloTestArr);
// console.log(helloTestArr2);

let helloStr = helloTestArr.join('');
// console.log(helloStr);

let reverseHelloStr = helloTestArr.reverse();
// console.log(reverseHelloStr);

let finalStr = helloTest.split('-').reverse().join('');
// console.log(finalStr);


const obj = {
  arr : ['a', 'b', 'c', 'd'],
  number : 10,
}

let testStr = obj.arr.reverse().join('');
// console.log(testStr);
// let testStr2 = obj.number?.reverse().join('');
// console.log(testStr2); //TypeError
// let testStr3 = obj.str?.reverse().join('');
// console.log(testStr3); //TypeError


const kdtCurriculum = ['HTML', 'CSS', 'JS', 'BACKEND', 'REACT'];

const result1 = kdtCurriculum[0].split('').reverse().join('');
const result2 = kdtCurriculum[kdtCurriculum.length-1].split('').reverse().join('');
console.log(result1);
console.log(result2);