// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showName = function() {
//     console.log(`이름은 ${this.name} 입니다`);
//   }
// }

// let user1 = new Kdt('이효석', 'M');
// let user2 = new Kdt('구슬기', 'F');

// console.log(user1);
// console.log(user2);
// user1.showName();
// user2.showName();


///
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = function() {
    console.log(`참여자 ${this.name} 님의 성별은 ${this.gender}입니다.`);
  }
}

const kdt1 = new Kdt('최두루', "남성");
const kdt2 = new Kdt('최인영', "여성");
const kdt3 = new Kdt('신상아', "여성");
const kdt4 = new Kdt('이유림', "여성");
const kdt5 = new Kdt('구슬기', "여성");
kdt1.showInfo();
kdt2.showInfo();
kdt3.showInfo();
kdt4.showInfo();
kdt5.showInfo();