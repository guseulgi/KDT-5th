// let seulgi = {
//   name : '구슬기',
//   age : 30,
// }

// seulgi.gender = "F";
// seulgi['height'] = 170;

// console.log(seulgi.height);
// console.log(seulgi['gender']);

// console.log (seulgi);
// delete seulgi.gender;
// delete seulgi['height'];
// console.log (seulgi);

let pororo = {
  name : '뽀로로',
  age : 7,
  run : function() {
    console.log("I can Run");
  },
  say() {
    console.log("뽀로로는 귀엽다");
  }
}

// console.log(pororo.name);
// console.log(pororo['age']);

// pororo.gender = 'M';
// console.log(pororo['gender']);
// pororo['height'] = 100;
// console.log(pororo.height);

// delete pororo.gender;
// console.log(pororo);
// console.log('name' in pororo);
// console.log('gender' in pororo);
// pororo['weight'] = 30;

// for(let key in pororo) {
//   console.log(key);
//   console.log(pororo[key]);
//   // console.log(pororo['key']);
//   // console.log(pororo.key);
// }

pororo.run();
pororo.say();