// const str = "Hello, World!";

// let newArr = str.replace('Hello', 'Hi');
// console.log(str);
// console.log(newArr);

// const str2 = "우영";
// const longStr = str2.repeat(10)+"영";
// console.log(longStr);


function solution(n) {
  let answer = '';
  let ch;
  for(let i = 1; i <= n; i++) {
    ch = i % 2 === 1 ? "수" : "박";
    answer += ch;
  }
  return answer;
}
///

const obj = {
  nba : "lebron",
  soccer: "messi",
  baseball: "TMT",
}
