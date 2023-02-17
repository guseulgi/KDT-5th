let nums = [-1.23, 13, 14.52, -33.53, 30];
// console.log(nums);
// console.log(...nums);

//1
let minNum = Math.floor(Math.min(...nums));
let maxNum = Math.floor(Math.max(...nums));
// console.log(minNum);
// console.log(maxNum);

//2
let sum = 0;
let avg;
nums.forEach((value) => {
  sum += Math.abs(Number(value));
});
avg = (sum / nums.length).toFixed(2);
console.log(avg);

//3
let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);