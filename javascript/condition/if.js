// 조건

// let str = "문자열은 참인가 거짓인가?";

// if(str) {
//   console.log("true");
// } else if (str) {
//   console.log("else if");
// } else {
//   console.log("false");
// }


// if문 중첩 - 지양
// let isOld = true;
// let isRich = false;

// if(isOld) {
//   if(!isRich) {
//     console.log("Old Man, do not have money");
//   } else {
//     console.debug("SoSo");
//   }
// } else {
//   console.log("Young Man, ");
//   if (!isRich) {
//     console.debug("Young Man have a lot of money");
//   } else {
//     console.debug("Humm...");
//   }
// }

// let otherAge = 16;
// let isAdult = otherAge > 19;

// if (isAdult) {
//   console.log("으른");
// } else {
//   console.log("애기");
// }


// let isAdult = false;
// let isVIP = true;
// let isDrunken = false;
// let isHaveMoney = false;

// if (((isAdult || isVIP) && !isDrunken) || isHaveMoney) {
//     console.log("통과");
// } else {
//     console.log("돌아가");
// }

let day = new Date().getDay();
let curDay;
if (day == 0) {
  curDay = "일요일";
} else if (day == 1) {
  curDay = "월요일";
} else if (day == 2) {
  curDay = "화요일";
} else if (day == 3) {
  curDay = "수요일";
} else if (day == 4) {
  curDay = "목요일";
} else if (day == 5) {
  curDay = "금요일";
} else if (day == 6) {
  curDay = "토요일";
}
alert(curDay);