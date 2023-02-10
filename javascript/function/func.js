// function sayHello(name) {
//   console.log(`${name}, 안녕!`);
// }
// sayHello('강아지');


function triangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') return;
  return (width + height) / 2;
}
  let triangleArea2 = (width, height) => {
    if (typeof width !== 'number' || typeof height !== 'number') return;
    return (width + height) / 2;
  }

function circleArea(radian) {
  if (typeof radian !== 'number') return;
  return Math.PI * (Math.pow(radian, 2));
}
  let circleArea2 = (radian) => {
    if (typeof radian !== 'number') return;
    return Math.PI * (Math.pow(radian, 2));
  }

function pythagoras(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') return;
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}
  let pythagoras2 = (width, height) => {
    if (typeof width !== 'number' || typeof height !== 'number') return;
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  }

console.log(triangleArea(3,4));
console.log(circleArea(3,4));
console.log(pythagoras(3,4));